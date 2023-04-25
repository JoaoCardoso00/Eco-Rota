export type Route = {
  name: string;
  slug: string;
  duration: string;
  dueDate: Date;
  availableHours: string[];
  experience: string[];
  description: string[];
  fullPrice: number;
  priceWithDiscount: number;
  priceInstallmentsNumber: number;
  images: string[];
  tags: string[];
  reviews: Review[];
};

type Review = {
  name: string;
  avatar: string;
  reviewTitle: string;
  review: string;
  rating: number;
};
