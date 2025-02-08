import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Get only the first segment
  const firstSegment = pathSegments.length > 0 ? pathSegments[0] : "";

  // Format the first segment properly
  const formatSegment = (segment: string) =>
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="bg-white border-b px-6 py-2 flex items-center justify-between text-sm">
      {firstSegment && <span className="text-gray-600 font-bold">{formatSegment(firstSegment)}</span>}
      {firstSegment && <span className="text-gray-600">{formatSegment(firstSegment)}</span>}
    </div>
  );
};

export default Breadcrumb;
