import { useState, useCallback } from "react";
import MatchCard from "./MatchCard";

const MatchList = ({ matches }) => {
  const [openMatchIndex, setOpenMatchIndex] = useState(0);

  const handleToggle = useCallback((index) => {
    if (index === openMatchIndex) {
      setOpenMatchIndex(-1);
    } else {
      setTimeout(() => {
        setOpenMatchIndex(index);
      }, 300); // 300ms delay to allow smooth closing of the previous match
    }
  }, [openMatchIndex]);

  return (
    <div className="w-[70%] bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
      <div className="space-y-4">
        {matches.map((match, index) => (
          <MatchCard 
            key={index} 
            {...match}
            isExpanded={index === openMatchIndex}
            onToggle={() => handleToggle(index)}
            matchReason={match.matchReason || "Match reason not provided"}
            potentialCollaboration={match.potentialCollaboration || "Potential collaboration not specified"}
            complimentarySkills={match.complimentarySkills || "Complimentary skills not listed"}
            sharedInterests={match.sharedInterests || "Shared interests not provided"}
            communicationCompatibility={match.communicationCompatibility || "Communication compatibility not specified"}
            geographicalSynergy={match.geographicalSynergy || "Geographical synergy not provided"}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
