export interface PastEvent {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  date: string;
  dateHi: string;
  imageUrl: string;
  category: string;
  categoryHi: string;
  impact?: string;
  impactHi?: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  date: string;
  dateHi: string;
  location: string;
  locationHi: string;
  time: string;
  timeHi: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  nameHi: string;
  role: string;
  roleHi: string;
  bio: string;
  bioHi: string;
  imageUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface GeneralMember {
  id: string;
  name: string;
  nameHi: string;
  role: string;
  roleHi: string;
  joinedYear?: string;
}

export interface YearlyEvent {
  id: string;
  year: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  imageUrl: string;
  impact?: string;
  impactHi?: string;
}

