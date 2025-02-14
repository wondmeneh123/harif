import React from "react";

const matches = [
  { time: "12:00", event: "Chelsea vs Brighton", odds: [2.99, 3.68, 2.3] },
  {
    time: "07:00",
    event: "Manchester United vs Brentford",
    odds: [2.4, 3.67, 2.1],
  },
];

const MatchTable: React.FC = () => {
  return (
    <table className="w-full text-left bg-white shadow-md">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Time</th>
          <th className="p-2">Event</th>
          <th className="p-2">1</th>
          <th className="p-2">X</th>
          <th className="p-2">2</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match, index) => (
          <tr key={index} className="border-t">
            <td className="p-2">{match.time}</td>
            <td className="p-2">{match.event}</td>
            {match.odds.map((odd, idx) => (
              <td key={idx} className="p-2">
                {odd}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MatchTable;
