import { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li
          className={`tabList ${activeTab === 'Today' ? 'active' : ''}`}
          onClick={() => handleClick('Today')}
        >
          Today
        </li>
        <li
          className={`tabList ${activeTab === 'Tomorrow' ? 'active' : ''}`}
          onClick={() => handleClick('Tomorrow')}
        >
          Tomorrow
        </li>
        <li
          className={`tabList ${activeTab === '5 days' ? 'active' : ''}`}
          onClick={() => handleClick('5 days')}
        >
          5 days
        </li>
      </ul>
      <div className="outlet">{/* content will be shown here */}</div>
    </div>
  );
};

export default Tabs;