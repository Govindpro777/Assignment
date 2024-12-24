import { LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: LucideIcon;
  text: string;
  capitalize?: boolean;
}

export function InfoItem({ icon: Icon, text, capitalize }: InfoItemProps) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
      <div className="bg-violet-50 p-2 rounded-lg">
        <Icon className="w-5 h-5 text-violet-600" />
      </div>
      <span className={`text-gray-700 text-lg ${capitalize ? 'capitalize' : ''}`}>
        {text}
      </span>
    </div>
  );
}