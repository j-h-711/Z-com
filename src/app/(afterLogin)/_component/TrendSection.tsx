import styles from "./trendSection.module.css";

import Trend from "./Trend";

export default function TrendSection() {
  const trendData = [
    { title: "실시간트랜드", user: "zeroCho", count: 4422 },
    { title: "실시간트랜드", user: "지형", count: 3414 },
    { title: "실시간트랜드", user: "천사1004", count: 1784 },
    { title: "실시간트랜드", user: "대장님", count: 5314 },
    { title: "실시간트랜드", user: "오늘의집", count: 4414 },
    { title: "실시간트랜드", user: "kingking", count: 2214 },
    { title: "실시간트랜드", user: "user123", count: 4314 },
    { title: "실시간트랜드", user: "top", count: 1314 },
    { title: "실시간트랜드", user: "최고다윽박", count: 1414 },
    { title: "실시간트랜드", user: "쯔양", count: 1234 },
  ];
  return (
    <>
      <div className={styles.trendBg}>
        <div className={styles.trend}>
          <h3>나를 위한 트랜드</h3>
          {trendData.map((trend, idx) => (
            <Trend key={idx} trend={trend}></Trend>
          ))}
        </div>
      </div>
    </>
  );
}
