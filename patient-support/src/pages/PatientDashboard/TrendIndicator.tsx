import { TrendingUp } from "lucide-react";

export const TrendIndicator = ({ trend }:any) => {
  const getColor = () => {
    switch (trend) {
      case 'increasing':
        return 'text-green-700';
      case 'decreasing':
        return 'text-red-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className={`flex items-center ${getColor()}`}>
      <TrendingUp className='w-4 h-4 mr-1' />
      <span className='text-sm capitalize'>{trend}</span>
    </div>
  );
};