import { cn } from '../cn';

/**
 * Custom variant system for managing Tailwind CSS class variants.
 * 
 * This module provides a type-safe, production-ready alternative to `tailwind-variants`,
 * supporting both regular variants and slot-based variants with full TypeScript inference.
 * 
 * @module variants
 * 
 * @example
 * // Regular variant usage
 * const button = createVariant({
 *   base: 'px-4 py-2 rounded',
 *   variants: {
 *     variant: {
 *       primary: 'bg-blue-500 text-white',
 *       secondary: 'bg-gray-500 text-white',
 *     },
 *     size: {
 *       sm: 'text-sm',
 *       md: 'text-base',
 *       lg: 'text-lg',
 *     },
 *   },
 *   defaultVariants: {
 *     variant: 'primary',
 *     size: 'md',
 *   },
 * });
 * 
 * const classes = button({ variant: 'primary', size: 'lg' });
 * 
 * @example
 * // Slots variant usage (for multi-part components)
 * const modal = createVariant({
 *   slots: {
 *     root: 'fixed inset-0',
 *     panel: 'bg-white rounded-lg',
 *   },
 *   variants: {
 *     size: {
 *       sm: { panel: 'max-w-sm' },
 *       md: { panel: 'max-w-md' },
 *     },
 *   },
 * });
 * 
 * const { root, panel } = modal({ size: 'md' });
 * const rootClasses = root();
 * const panelClasses = panel({ className: 'custom-class' });
 */

/**
 * Represents a single variant value - can be a string (class names),
 * an object (for slot-based variants), or a number (for numeric variants).
 */
type VariantValue = string | Record<string, string> | number;

/**
 * A variant definition maps variant keys (string/number) to variant values.
 * Used to define all possible values for a single variant property.
 * 
 * @example
 * {
 *   'sm': 'text-sm px-2',
 *   'md': 'text-base px-4',
 *   'lg': 'text-lg px-6',
 * }
 */
type VariantDefinition = Record<string | number, VariantValue>;

/**
 * Collection of all variant definitions for a component.
 * Each key is a variant name, each value is a VariantDefinition.
 * 
 * @example
 * {
 *   size: { sm: '...', md: '...' },
 *   variant: { primary: '...', secondary: '...' },
 * }
 */
type Variants = Record<string, VariantDefinition>;

/**
 * Defines a compound variant that applies classes when multiple variant conditions are met.
 * 
 * Compound variants allow you to apply styles based on combinations of variant values.
 * 
 * @example
 * {
 *   variant: 'primary',
 *   size: 'lg',
 *   class: 'shadow-lg', // Applied when both variant is 'primary' AND size is 'lg'
 * }
 */
type CompoundVariant<TVariants extends Variants = Variants> = {
  [K in keyof TVariants]?: keyof TVariants[K] | boolean;
} & {
  class?: string;
};

/**
 * Type-safe default variant values.
 * 
 * Automatically infers the correct type based on variant definitions:
 * - Boolean variants (with 'true'/'false' keys) → boolean
 * - String/number variants → keyof the variant definition
 * 
 * @example
 * {
 *   size: 'md',        // String variant
 *   disabled: false,    // Boolean variant
 * }
 */
type DefaultVariants<TVariants extends Variants = Variants> = {
  [K in keyof TVariants]?: TVariants[K] extends Record<'true', any> & Record<'false', any>
    ? boolean
    : TVariants[K] extends Record<'true', any>
    ? boolean
    : keyof TVariants[K];
};

/**
 * Configuration for regular (non-slots) variants.
 * 
 * Used for single-element components where all variant classes apply to one element.
 * 
 * @template TVariants - The variant definitions type
 */
type VariantConfig<TVariants extends Variants = Variants> = {
  /** Base classes that always apply */
  base?: string;
  /** Variant definitions */
  variants?: TVariants;
  /** Compound variants for conditional styling based on multiple variants */
  compoundVariants?: Array<CompoundVariant<TVariants>>;
  /** Default values for variants */
  defaultVariants?: DefaultVariants<TVariants>;
  /** Explicitly exclude slots to distinguish from SlotsConfig */
  slots?: never;
};

/**
 * Slot definitions for multi-part components.
 * Each key is a slot name, each value is the base classes for that slot.
 * 
 * @example
 * {
 *   root: 'flex items-center',
 *   label: 'text-sm font-medium',
 *   input: 'border rounded',
 * }
 */
type Slots = Record<string, string>;

/**
 * Slot-specific variant definitions.
 * 
 * For each variant, you can specify different classes for different slots.
 * 
 * @example
 * {
 *   size: {
 *     sm: {
 *       root: 'p-2',
 *       label: 'text-xs',
 *     },
 *     md: {
 *       root: 'p-4',
 *       label: 'text-sm',
 *     },
 *   },
 * }
 */
type SlotsVariants<TVariants extends Variants = Variants> = {
  [K in keyof TVariants]: Record<string | number, Record<string, string>>;
};

/**
 * Compound variant for slots-based components.
 * 
 * Allows applying classes to specific slots or all slots when conditions are met.
 * 
 * @example
 * {
 *   variant: 'primary',
 *   size: 'lg',
 *   class: { root: 'shadow-lg', label: 'font-bold' }, // Slot-specific
 * }
 * 
 * @example
 * {
 *   variant: 'primary',
 *   class: 'bg-blue-500', // Applied to all slots
 * }
 */
type SlotsCompoundVariant<TVariants extends Variants = Variants> = {
  [K in keyof TVariants]?: keyof TVariants[K] | boolean;
} & {
  class?: string | Record<string, string> | any;
};

/**
 * Configuration for slots-based variants.
 * 
 * Used for multi-part components where different variant classes apply to different elements.
 * 
 * @template TSlots - The slots definitions type
 * @template TVariants - The variant definitions type
 */
type SlotsConfig<TSlots extends Slots = Slots, TVariants extends Variants = Variants> = {
  /** Slot definitions - required for slots mode */
  slots: TSlots;
  /** Slot-specific variant definitions */
  variants?: SlotsVariants<TVariants>;
  /** Compound variants for slots */
  compoundVariants?: Array<SlotsCompoundVariant<TVariants> | any>;
  /** Default values for variants */
  defaultVariants?: DefaultVariants<TVariants>;
  /** Explicitly exclude base to distinguish from VariantConfig */
  base?: never;
};

/**
 * Extracts variant prop types from a createVariant function result.
 * 
 * This utility type extracts the props that can be passed to a variant function,
 * excluding the `className` prop (which is handled separately).
 * 
 * Works with both regular variants (returns string) and slots variants (returns object of functions).
 * 
 * @template T - The createVariant function result type
 * 
 * @example
 * const button = createVariant({ ... });
 * type ButtonVariants = VariantProps<typeof button>;
 * // ButtonVariants = { variant?: 'primary' | 'secondary', size?: 'sm' | 'md' | 'lg' }
 */
type VariantPropsInternal<T> = T extends (...args: any[]) => any
  ? T extends (props?: infer P) => any
    ? P extends { className?: string }
      ? Omit<P, 'className'>
      : P extends Record<string, any>
      ? P
      : never
    : never
  : T extends { [K: string]: (...args: any[]) => any }
  ? {
      [K in keyof T]?: T[K] extends (props?: infer P) => any
        ? P extends { className?: string }
          ? Omit<P, 'className'>
          : P
        : never;
    }
  : never;

/**
 * Props type for variant functions.
 * 
 * Automatically infers the correct prop types:
 * - Boolean variants (with 'true'/'false' keys) → boolean | undefined
 * - String/number variants → keyof variant definition | undefined
 * - Always includes optional className prop
 * 
 * @template TVariants - The variant definitions type
 * @template TDefaults - The default variants type
 */
type VariantFunctionProps<TVariants extends Variants, TDefaults extends DefaultVariants<TVariants>> = {
  [K in keyof TVariants]?: TVariants[K] extends Record<'true', any> & Record<'false', any>
    ? boolean | undefined
    : TVariants[K] extends Record<'true', any>
    ? boolean | undefined
    : K extends keyof TDefaults
    ? keyof TVariants[K] | undefined
    : keyof TVariants[K];
} & {
  className?: string;
};

/**
 * Checks if a compound variant matches the current props.
 * 
 * A compound variant matches when ALL specified conditions are met.
 * 
 * @template TVariants - The variant definitions type
 * @param props - Current variant props
 * @param compound - The compound variant to check
 * @param defaults - Default variant values
 * @returns true if all conditions match, false otherwise
 * 
 * @example
 * // Compound: { variant: 'primary', size: 'lg', class: 'shadow-lg' }
 * // Props: { variant: 'primary', size: 'lg' } → matches ✓
 * // Props: { variant: 'primary', size: 'md' } → doesn't match ✗
 * 
 * @example
 * // Compound variant with false value
 * // Compound: { disabled: false, variant: 'outline', class: 'hover:bg-primary' }
 * // Props: { disabled: false, variant: 'outline' } → matches ✓
 * // Props: { disabled: true, variant: 'outline' } → doesn't match ✗
 * // Props: { disabled: undefined, variant: 'outline' } → doesn't match ✗ (undefined coerces to false, but explicit false required)
 * 
 * @remarks
 * - Explicitly handles boolean compound values including 'false'
 * - When compoundValue is false, matches only when propValue is explicitly false (not undefined/null)
 * - When compoundValue is true, matches when propValue is truthy (true, non-empty string, etc.)
 * - For non-boolean values, uses strict equality comparison
 */
function matchesCompoundVariant<TVariants extends Variants>(
  props: Record<string, any>,
  compound: CompoundVariant<TVariants>,
  defaults: DefaultVariants<TVariants> = {}
): boolean {
  for (const key in compound) {
    if (key === 'class') continue;
    const propValue = props[key] ?? defaults[key];
    const compoundValue = compound[key];
    
    if (compoundValue === undefined) continue;
    
    // Handle boolean compound values (including explicit 'false')
    // When compoundValue is false, we need explicit false (not undefined/null)
    // When compoundValue is true, we match truthy values
    if (typeof compoundValue === 'boolean') {
      // For false: require explicit false (not undefined/null which would coerce to false)
      // For true: match any truthy value
      if (compoundValue === false) {
        if (propValue !== false) return false;
      } else {
        // compoundValue is true, match truthy values
        if (!propValue) return false;
      }
    } else if (propValue !== compoundValue) {
      return false;
    }
  }
  return true;
}

/**
 * Resolves variant classes for regular (non-slots) variants.
 * 
 * Processes all variant props, applies matching variant classes, and handles compound variants.
 * 
 * @template TVariants - The variant definitions type
 * @param props - Current variant props
 * @param variants - Variant definitions
 * @param compoundVariants - Compound variant definitions
 * @param defaults - Default variant values
 * @returns Merged class string
 * 
 * @remarks
 * - Boolean variants are converted to 'true'/'false' string keys
 * - Supports boolean variants with only 'true' key or both 'true' and 'false' keys
 * - When 'false' is passed and 'false' key exists in definition, applies 'false' variant classes
 * - When 'false' is passed but 'false' key doesn't exist, gracefully skips (defensive programming)
 * - Only processes variants that exist in the definition (defensive programming)
 * - Skips undefined/null values gracefully
 * - Compound variants are applied after regular variants
 */
function resolveVariantClasses<TVariants extends Variants>(
  props: Record<string, any>,
  variants: TVariants,
  compoundVariants: Array<CompoundVariant<TVariants>> = [],
  defaults: DefaultVariants<TVariants> = {}
): string {
  const classes: string[] = [];
  
  // Apply variant classes
  for (const variantKey in variants) {
    let propValue = props[variantKey] ?? defaults[variantKey];
    
    // Skip undefined/null values
    if (propValue === undefined || propValue === null) {
      continue;
    }
    
    const variantDef = variants[variantKey];
    if (!variantDef) {
      continue;
    }
    
    // Handle boolean variants - convert boolean to 'true' or 'false' string key
    // Supports both 'true'-only variants and 'true'+'false' variants
    // When propValue is false and 'false' key exists, applies 'false' variant classes
    // When propValue is false but 'false' key doesn't exist, gracefully skips (defensive programming)
    if (typeof propValue === 'boolean') {
      const stringKey = propValue ? 'true' : 'false';
      // Defensive check: only process if the key exists in the definition
      // This allows variants with only 'true' key (false is skipped) or both keys (both work)
      if (!(stringKey in variantDef)) {
        continue;
      }
      propValue = stringKey;
    }
    
    const variantValue = variantDef[String(propValue)];
    if (variantValue) {
      if (typeof variantValue === 'string') {
        classes.push(variantValue);
      } else if (typeof variantValue === 'object') {
        // For nested objects (like slots), we skip here as they're handled differently
        // This prevents accidentally processing slot-based variants in regular mode
      }
    }
  }
  
  // Apply compound variants (after regular variants)
  for (const compound of compoundVariants) {
    if (matchesCompoundVariant(props, compound, defaults)) {
      if (compound.class && typeof compound.class === 'string') {
        classes.push(compound.class);
      }
    }
  }
  
  return cn(...classes);
}

/**
 * Resolves variant classes for a specific slot in slots-based variants.
 * 
 * Processes slot-specific variant classes and compound variants for a given slot name.
 * 
 * @template TSlots - The slots definitions type
 * @template TVariants - The variant definitions type
 * @param slotName - The name of the slot to resolve classes for
 * @param props - Current variant props
 * @param slotsVariants - Slot-specific variant definitions
 * @param compoundVariants - Compound variant definitions
 * @param defaults - Default variant values
 * @returns Merged class string for the slot
 * 
 * @remarks
 * - Boolean variants are converted to 'true'/'false' string keys
 * - Supports boolean variants with only 'true' key or both 'true' and 'false' keys
 * - When 'false' is passed and 'false' key exists in definition, applies 'false' variant classes
 * - When 'false' is passed but 'false' key doesn't exist, gracefully skips (defensive programming)
 * - Only processes variants that exist in the definition (defensive programming)
 * - Skips undefined/null values gracefully
 * - Handles both slot-specific and global compound variants
 * 
 * @example
 * // Variant: { size: { sm: { panel: 'max-w-sm' }, md: { panel: 'max-w-md' } } }
 * // Props: { size: 'md' }
 * // Slot: 'panel'
 * // Returns: 'max-w-md'
 */
function resolveSlotsVariantClasses<TSlots extends Slots, TVariants extends Variants>(
  slotName: string,
  props: Record<string, any>,
  slotsVariants: SlotsVariants<TVariants> | undefined,
  compoundVariants: Array<SlotsCompoundVariant<TVariants>> = [],
  defaults: DefaultVariants<TVariants> = {}
): string {
  const classes: string[] = [];
  
  if (slotsVariants) {
    // Apply slot-specific variant classes
    for (const variantKey in slotsVariants) {
      let propValue = props[variantKey] ?? defaults[variantKey];
      
      // Skip undefined/null values
      if (propValue === undefined || propValue === null) {
        continue;
      }
      
      const variantDef = slotsVariants[variantKey];
      if (!variantDef) {
        continue;
      }
      
      // Handle boolean variants - convert boolean to 'true' or 'false' string key
      // Supports both 'true'-only variants and 'true'+'false' variants
      // When propValue is false and 'false' key exists, applies 'false' variant classes
      // When propValue is false but 'false' key doesn't exist, gracefully skips (defensive programming)
      if (typeof propValue === 'boolean') {
        const stringKey = propValue ? 'true' : 'false';
        // Defensive check: only process if the key exists in the definition
        // This allows variants with only 'true' key (false is skipped) or both keys (both work)
        if (!(stringKey in variantDef)) {
          continue;
        }
        propValue = stringKey;
      }
      
      // First get the variant value object (e.g., { panel: 'max-w-xl', overlay: 'opacity-50' })
      const variantValue = variantDef[String(propValue)];
      // Then get the slot-specific class from that object
      if (variantValue && typeof variantValue === 'object' && !Array.isArray(variantValue)) {
        const slotVariant = variantValue[slotName];
        if (slotVariant && typeof slotVariant === 'string') {
          classes.push(slotVariant);
        }
      }
    }
  }
  
  // Apply slot-specific compound variants
  for (const compound of compoundVariants) {
    if (matchesCompoundVariant(props, compound as CompoundVariant<TVariants>, defaults)) {
      if (compound.class) {
        if (typeof compound.class === 'string') {
          // Apply to all slots (legacy behavior)
          classes.push(compound.class);
        } else if (typeof compound.class === 'object' && compound.class[slotName]) {
          // Apply to specific slot
          classes.push(compound.class[slotName]);
        }
      }
    }
  }
  
  return cn(...classes);
}

/**
 * Creates a variant function for regular (non-slots) mode.
 * 
 * Returns a function that accepts variant props and returns a merged class string.
 * 
 * @template TVariants - The variant definitions type
 * @param config - Variant configuration
 * @returns A function that resolves variant classes
 * 
 * @example
 * const button = createVariantRegular({
 *   base: 'px-4 py-2',
 *   variants: {
 *     variant: { primary: 'bg-blue-500', secondary: 'bg-gray-500' },
 *   },
 * });
 * 
 * const classes = button({ variant: 'primary' }); // 'px-4 py-2 bg-blue-500'
 */
function createVariantRegular<TVariants extends Variants>(
  config: VariantConfig<TVariants>
): (props?: VariantFunctionProps<TVariants, DefaultVariants<TVariants>>) => string {
  const { base = '', variants = {} as TVariants, compoundVariants = [], defaultVariants = {} } = config;
  
  return (props = {} as VariantFunctionProps<TVariants, DefaultVariants<TVariants>>) => {
    const { className, ...variantProps } = props;
    const variantClasses = resolveVariantClasses(variantProps, variants, compoundVariants, defaultVariants);
    return cn(base, variantClasses, className);
  };
}

/**
 * Creates a variant function for slots mode.
 * 
 * Returns a function that accepts variant props and returns an object of slot functions.
 * Each slot function can be called with optional slot-specific className.
 * 
 * @template TSlots - The slots definitions type
 * @template TVariants - The variant definitions type
 * @param config - Slots variant configuration
 * @returns A function that returns slot resolvers
 * 
 * @example
 * const modal = createVariantSlots({
 *   slots: {
 *     root: 'fixed inset-0',
 *     panel: 'bg-white rounded',
 *   },
 *   variants: {
 *     size: {
 *       sm: { panel: 'max-w-sm' },
 *       md: { panel: 'max-w-md' },
 *     },
 *   },
 * });
 * 
 * const { root, panel } = modal({ size: 'md' });
 * const rootClasses = root(); // 'fixed inset-0'
 * const panelClasses = panel({ className: 'custom' }); // 'bg-white rounded max-w-md custom'
 */
function createVariantSlots<TSlots extends Slots, TVariants extends Variants>(
  config: SlotsConfig<TSlots, TVariants>
): (props?: VariantFunctionProps<TVariants, DefaultVariants<TVariants>>) => {
  [K in keyof TSlots]: (slotProps?: { className?: string }) => string;
} {
  const { slots, variants = {} as SlotsVariants<TVariants>, compoundVariants = [], defaultVariants = {} } = config;
  
  return (props = {} as VariantFunctionProps<TVariants, DefaultVariants<TVariants>>) => {
    const result: Record<string, (slotProps?: { className?: string }) => string> = {};
    
    // Create a resolver function for each slot
    for (const slotName in slots) {
      const baseClasses = slots[slotName];
      result[slotName] = (slotProps?: { className?: string }) => {
        const slotVariantClasses = resolveSlotsVariantClasses(
          slotName,
          props,
          variants,
          compoundVariants,
          defaultVariants
        );
        return cn(baseClasses, slotVariantClasses, slotProps?.className);
      };
    }
    
    return result as {
      [K in keyof TSlots]: (slotProps?: { className?: string }) => string;
    };
  };
}

/**
 * Main export: Creates a type-safe variant function.
 * 
 * Automatically detects whether to use regular or slots mode based on the config.
 * Uses function overloads for full TypeScript type inference.
 * 
 * @overload
 * @template TSlots - The slots definitions type
 * @template TVariants - The variant definitions type
 * @param config - Slots variant configuration
 * @returns A function that returns slot resolvers
 * 
 * @overload
 * @template TVariants - The variant definitions type
 * @param config - Regular variant configuration
 * @returns A function that returns a class string
 * 
 * @example
 * // Regular variant
 * const button = createVariant({
 *   base: 'px-4 py-2',
 *   variants: {
 *     variant: { primary: 'bg-blue-500', secondary: 'bg-gray-500' },
 *   },
 * });
 * 
 * @example
 * // Boolean variant with only 'true' key
 * const checkbox = createVariant({
 *   base: 'rounded border',
 *   variants: {
 *     disabled: {
 *       true: 'opacity-50 cursor-not-allowed',
 *     },
 *   },
 * });
 * // Usage: checkbox({ disabled: true }) → applies classes
 * // Usage: checkbox({ disabled: false }) → skips (key doesn't exist)
 * 
 * @example
 * // Boolean variant with both 'true' and 'false' keys
 * const tab = createVariant({
 *   base: 'px-4 py-2',
 *   variants: {
 *     selected: {
 *       true: 'bg-blue-500 text-white',
 *       false: 'bg-gray-200 text-gray-700',
 *     },
 *   },
 * });
 * // Usage: tab({ selected: true }) → applies 'bg-blue-500 text-white'
 * // Usage: tab({ selected: false }) → applies 'bg-gray-200 text-gray-700'
 * 
 * @example
 * // Compound variant with 'false' value
 * const switch = createVariant({
 *   base: 'rounded-full',
 *   variants: {
 *     disabled: {
 *       true: 'opacity-50',
 *     },
 *   },
 *   compoundVariants: [
 *     { disabled: false, variant: 'outline', class: 'hover:bg-primary' },
 *   ],
 * });
 * 
 * @example
 * // Slots variant
 * const modal = createVariant({
 *   slots: {
 *     root: 'fixed inset-0',
 *     panel: 'bg-white',
 *   },
 *   variants: {
 *     size: {
 *       sm: { panel: 'max-w-sm' },
 *     },
 *   },
 * });
 * 
 * @remarks
 * - Production-ready with defensive programming
 * - Full TypeScript type inference
 * - Handles boolean, string, and number variants
 * - Supports boolean variants with 'true' only or both 'true' and 'false' keys
 * - Supports compound variants with boolean values (including 'false')
 * - Gracefully handles missing keys and undefined values
 * - Zero runtime dependencies (except cn utility)
 */
function createVariant<TSlots extends Slots, TVariants extends Variants>(
  config: SlotsConfig<TSlots, TVariants>
): (props?: VariantFunctionProps<TVariants, DefaultVariants<TVariants>>) => {
  [K in keyof TSlots]: (slotProps?: { className?: string }) => string;
};

function createVariant<TVariants extends Variants>(
  config: VariantConfig<TVariants>
): (props?: VariantFunctionProps<TVariants, DefaultVariants<TVariants>>) => string;

function createVariant(config: any): any {
  // Runtime detection: if config has 'slots' property, use slots mode
  if ('slots' in config && config.slots !== undefined) {
    return createVariantSlots(config);
  }
  return createVariantRegular(config);
}

export { createVariant };
export type { VariantPropsInternal as VariantProps };
