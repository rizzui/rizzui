import React, { Fragment } from 'react';
import { SunIcon } from '@heroicons/react/20/solid';
import { MoonIcon, LinkIcon } from '@heroicons/react/24/outline';
import { Avatar } from 'rizzui';

export const defaultCollapseData = [
  {
    title: 'Option A',
    content: (
      <Fragment>
        If you are unhappy with your purchase for any reason, email us within 90
        days and we will refund you in full, no questions asked. If you are
        unhappy with your purchase for any reason, email us within 90 days and
        we will refund you in full, no questions asked.If you are unhappy with
        your purchase for any reason.
      </Fragment>
    ),
  },
  {
    title: 'Option B',
    content: (
      <Fragment>
        If you are unhappy with your purchase for any reason, email us within 90
        days and we will refund you in full, no questions asked. If you are
        unhappy with your purchase for any reason, email us within 90 days and
        we will refund you in full, no questions asked.If you are unhappy with
        your purchase for any reason.
      </Fragment>
    ),
  },
  {
    title: 'Option C',
    content: (
      <Fragment>
        If you are unhappy with your purchase for any reason, email us within 90
        days and we will refund you in full, no questions asked. If you are
        unhappy with your purchase for any reason, email us within 90 days and
        we will refund you in full, no questions asked.If you are unhappy with
        your purchase for any reason.
      </Fragment>
    ),
  },
];

export const customStyleCollapseData = [
  {
    title: 'Option A',
    icon: <LinkIcon />,
    avatar: (
      <Avatar
        size="lg"
        rounded="lg"
        src="https://randomuser.me/api/portraits/men/3.jpg"
        className="ring-2 ring-primary ring-offset-2"
      />
    ),
    defaultOpen: true,
    content: (
      <Fragment>
        If you are unhappy with your purchase for any reason, email us within 90
        days and we will refund you in full, no questions asked. If you are
        unhappy with your purchase for any reason, email us within 90 days and
        we will refund you in full, no questions asked.If you are unhappy with
        your purchase for any reason.
      </Fragment>
    ),
  },
  {
    title: 'Option B',
    icon: <MoonIcon />,
    avatar: (
      <Avatar
        size="lg"
        rounded="lg"
        src="https://randomuser.me/api/portraits/women/40.jpg"
        className="ring-2 ring-green ring-offset-2"
      />
    ),
    defaultOpen: false,
    content: (
      <Fragment>
        If you are unhappy with your purchase for any reason, email us within 90
        days and we will refund you in full, no questions asked. If you are
        unhappy with your purchase for any reason, email us within 90 days and
        we will refund you in full, no questions asked.If you are unhappy with
        your purchase for any reason.
      </Fragment>
    ),
  },
  {
    title: 'Option C',
    icon: <SunIcon />,
    avatar: (
      <Avatar
        size="lg"
        rounded="lg"
        src="https://randomuser.me/api/portraits/women/7.jpg"
        className="ring-2 ring-red ring-offset-2"
      />
    ),
    defaultOpen: false,
    content: (
      <Fragment>
        If you are unhappy with your purchase for any reason, email us within 90
        days and we will refund you in full, no questions asked. If you are
        unhappy with your purchase for any reason, email us within 90 days and
        we will refund you in full, no questions asked.If you are unhappy with
        your purchase for any reason.
      </Fragment>
    ),
  },
];
