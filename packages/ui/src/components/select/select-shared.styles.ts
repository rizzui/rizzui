import { dropdownStyles } from '../../lib/dropdown-list-style';

export const optionListStyles = {
  base: `${dropdownStyles.base} overflow-auto w-[var(--button-width)] !outline-none !ring-0 m-0 [&>li]:!m-0 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.2)_rgba(0,0,0,0)] [-ms-overflow-style:none] [&::-webkit-scrollbar-track]:shadow-none [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-lg data-[open]:opacity-100 data-[leave]:data-[closed]:opacity-100`,
  shadow: dropdownStyles.shadow,
  item: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  inPortal: '[--anchor-max-height:256px]',
  notInPortal: 'absolute z-10 h-[256px] start-0 top-full mt-1.5',
};

export const searchStyles = {
  base: 'relative mb-2 block group [&.sticky]:mb-0',
  inputBase: 'px-10 placeholder:text-muted-foreground',
  prefix:
    'absolute z-10 start-1 top-5 group-[.sticky]:top-7 inline-block -translate-y-1/2 whitespace-nowrap leading-normal text-muted-foreground',
  suffix:
    'absolute z-10 end-1 top-5 group-[.sticky]:top-7 inline-block -translate-y-1/2 whitespace-nowrap leading-normal text-muted-foreground',
  stickySearch: 'sticky top-0 z-10 bg-background pt-2 -translate-y-2',
};

