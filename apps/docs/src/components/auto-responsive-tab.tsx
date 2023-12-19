import React from "react";
import { Tab } from "rizzui";

const data = [
  "Home",
  "Explore",
  "Products",
  "Widgets",
  "About",
  "Features",
  "Pricing",
  "Dashboard",
  "Settings",
  "Profile",
  "Users",
  "Contact",
  "Privacy",
  "Docs",
  "Blog",
];

export default function AuthResponsiveTab() {
  return (
    <Tab>
      <Tab.List>
        {data.map((item, idx) => (
          <Tab.ListItem key={`${item}-${idx}`}>{item}</Tab.ListItem>
        ))}
      </Tab.List>
      <Tab.Panels>
        {data.map((item, idx) => (
          <Tab.Panel key={`${item}-panel-${idx}`}>{item} panel</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab>
  );
}
