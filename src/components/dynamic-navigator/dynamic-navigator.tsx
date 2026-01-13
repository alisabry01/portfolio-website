import styles from "./dynamic-navigator.module.css";
import clsx from "clsx";
import { useState } from "react";
import type { ElementType } from "react";

export interface TabConfig {
  id: string;
  label: string;
  component: ElementType;
}

interface DynamicNavigatorProps {
  tabs: TabConfig[];
}

export const DynamicNavigator: React.FC<DynamicNavigatorProps> = ({
  tabs,
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || "");

  const handleTabChange = (tabId: string) => setActiveTab(tabId);

  const activeTabConfig = tabs.find((tab) => tab.id === activeTab);
  const ActiveComponent = activeTabConfig?.component || null;

  return (
    <section className={styles["dynamic-navigator"]}>
      <div className={styles["tabs-container"]}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={clsx([
              styles["tab"],
              activeTab === tab.id && styles["active-tab"],
            ])}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles["content-display"]}>
        {ActiveComponent && <ActiveComponent />}
      </div>
    </section>
  );
};
