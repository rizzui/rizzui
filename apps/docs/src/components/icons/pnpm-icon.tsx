import React from "react";

export default function PnpmIcon({
    ...props
}: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={160.01}
            height={160}
            viewBox="76.59 44 164.008 164"
            fill="none"
            {...props}
        >
            <defs>
                <path id="a" d="M237.6 95h-50V45h50v50Z" />
                <path id="b" d="M182.59 95h-50V45h50v50Z" />
                <path id="c" d="M127.59 95h-50V45h50v50Z" />
                <path id="d" d="M237.6 150h-50v-50h50v50Z" />
                <path id="e" d="M182.59 150h-50v-50h50v50Z" />
                <path id="f" d="M182.59 205h-50v-50h50v50Z" />
                <path id="g" d="M237.6 205h-50v-50h50v50Z" />
                <path id="h" d="M127.59 205h-50v-50h50v50Z" />
            </defs>
            <use xlinkHref="#a" fill="#f9ad00" />
            <use xlinkHref="#b" fill="#f9ad00" />
            <use xlinkHref="#c" fill="#f9ad00" />
            <use xlinkHref="#d" fill="#f9ad00" />
            <use xlinkHref="#e" fill="currentColor" />
            <use xlinkHref="#f" fill="currentColor" />
            <use xlinkHref="#g" fill="currentColor" />
            <use xlinkHref="#h" fill="currentColor" />
        </svg>
    );
}