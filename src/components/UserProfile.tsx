import { Phone, User, Mail, MapPin } from 'lucide-react';
import { UserData } from '@/types/user';
import { ProfileImage } from './ProfileImage';
import { InfoItem } from './InfoItem';

interface UserProfileProps {
  userData: UserData;
}

export function UserProfile({ userData }: UserProfileProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full mx-auto transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-gradient-to-br from-violet-600 to-indigo-600 p-8 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsbD0idXJsKCNncmFkaWVudCkiLz48L3N2Zz4=')] opacity-10"></div>
          <ProfileImage
            src={userData.picture.large}
            alt={`${userData.name.first} ${userData.name.last}`}
          />
        </div>

        <div className="md:w-2/3 p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {userData.name.first} {userData.name.last}
              </h1>
              <div className="flex items-center mt-2 space-x-2">
                <p className="text-gray-500 text-lg font-medium">{userData.name.title}</p>
                <span className="text-gray-300">•</span>
                <span className="text-violet-600 font-medium capitalize">{userData.gender}</span>
              </div>
            </div>

            <div className="space-y-4">
              <InfoItem icon={Mail} text={userData.email} />
              <InfoItem icon={Phone} text={userData.phone} />
              <InfoItem
                icon={MapPin}
                text={`${userData.location.city}, ${userData.location.country}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}