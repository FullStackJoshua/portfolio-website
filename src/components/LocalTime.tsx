// components/LocalTime.tsx
import { useEffect, useState } from "react";

const LocalTime: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [timeString, period] = formattedTime.split(" ");

  return (
    <div className="text-7xl font-semibold p-5">
      {timeString}
      <span className="block ml-3">{period}</span>
    </div>
  );
};

export default LocalTime;
