import { StaticImageData } from "next/image";

export type id = {
  _id: string;
};
export type CardProps = {
  title: string;
  description: string;
  background: string;
  height: string;
  titleColor: string;
  textColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  icon?: React.ReactNode;
}

export type TestimonialProps = {
  name: string;
  email: string;
  comment: string;
  status: string;
  rating: number;
}

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  author: string;
  date: string; // You may want to consider using Date type if you plan to work with date operations
  readTime: string;
  image: StaticImageData | string; // Assuming `blogs1` is an image file or URL as a string
  category: string;
  keyPoints: string[];
};
