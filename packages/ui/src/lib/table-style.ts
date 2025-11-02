import { tv } from 'tailwind-variants';

export const table = tv({
  base: 'min-w-full border-collapse',
  variants: {
    variant: {
      modern:
        '[&_thead]:bg-gray-100 [&_th]:text-start [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:border-b [&_tbody_tr]:last:border-b-0 [&_tbody_tr]:border-muted [&_tbody_tr]:hover:bg-gray-50 [&_td]:py-4 [&_td]:px-3',
      minimal:
        '[&_thead]:bg-gray-100 [&_thead_th]:first:rounded-s-lg [&_thead_th]:last:rounded-e-lg [&_th]:text-start [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:hover:bg-gray-50 [&_td]:py-4 [&_td]:px-3',
      elegant:
        '[&_thead]:border-y [&_thead]:border-muted [&_th]:text-start [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:border-b [&_tbody_tr]:last:border-b-0 [&_tbody_tr]:border-muted [&_tbody_tr]:hover:bg-gray-50 [&_td]:py-4 [&_td]:px-3',
      retro:
        '[&_thead]:border-y [&_thead]:border-muted [&_th]:text-start [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:last:border-b-0 [&_tbody_tr]:hover:bg-gray-50 [&_td]:py-4 [&_td]:px-3',
      classic:
        'border-x border-muted [&_thead]:border-y [&_thead]:bg-gray-100 [&_thead]:border-muted [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:text-start [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:border-b [&_tbody_tr]:border-muted [&_tbody_tr]:hover:bg-gray-50 [&_td]:text-start [&_td]:py-4 [&_td]:px-3',
    },
  },
  defaultVariants: {
    variant: 'modern',
  },
});

// Legacy export for backward compatibility
export const tableStyles = {
  variants: {
    modern: table({ variant: 'modern' }),
    minimal: table({ variant: 'minimal' }),
    elegant: table({ variant: 'elegant' }),
    retro: table({ variant: 'retro' }),
    classic: table({ variant: 'classic' }),
  },
};
