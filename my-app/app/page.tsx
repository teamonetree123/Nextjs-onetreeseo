// app/components/Hero.tsx
"use client";

import * as React from "react";
import type { SVGProps } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

/* --- Inline SVG icons (no external deps) --- */
const MapPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const Phone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 8.81 19.79 19.79 0 0 1 .08.18 2 2 0 0 1 2.06-2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .65 2.81 2 2 0 0 1-.45 2.11L6.1 7.91a16 16 0 0 0 6 6l3.27-1.16a2 2 0 0 1 2.11.45c.84.84 1.79 1.59 2.81.65A12.05 12.05 0 0 0 20.28 14a2 2 0 0 1 1.72 2.92z" />
  </svg>
);
const Mail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16v16H4z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Sparkles = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M10.5 2.5l1.2 3.6 3.6 1.2-3.6 1.2-1.2 3.6-1.2-3.6L5.7 7.3l3.6-1.2 1.2-3.6zM18 10l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6zM6.5 14l.8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8.8-2.4z" />
  </svg>
);

const TrendingUp = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M22 7l-7.5 7.5-5-5L2 17" />
    <path d="M16 7h6v6" />
  </svg>
);

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M8 5v14l11-7-11-7z" />
  </svg>
);

const Target = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

const Zap = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
  </svg>
);

/* Service + benefit icons */
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-3.5-3.5" />
  </svg>
);

const PenTool = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13L10 5 4 11l8 8" />
    <path d="M2 22l4-4" />
  </svg>
);

const BarChart3 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 3v18h18" />
    <rect x="7" y="9" width="3" height="6" />
    <rect x="12" y="5" width="3" height="10" />
    <rect x="17" y="12" width="3" height="3" />
  </svg>
);

const Globe = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Smartphone = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

const DollarSign = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const Users = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MousePointer = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 3l7 17 2-7 7-2-16-8z" />
    <path d="M13 13l6 6" />
  </svg>
);
const CheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
/* --- Extra Icons --- */

// For testimonials (quote mark)
const Quote = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a6 6 0 0 0-6-6zm10 0A5.17 5.17 0 0 0 12 11.17V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a6 6 0 0 0-6-6z"/>
  </svg>
);

// For project industry badges
const Bag = (props: React.SVGProps<SVGSVGElement>) => ( // Retail / E-commerce
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M6 2l1 5h10l1-5z" />
    <path d="M3 7h18v14H3z" />
  </svg>
);

const Home = (props: React.SVGProps<SVGSVGElement>) => ( // Home Services
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 9.5L12 3l9 6.5V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const Laptop = (props: React.SVGProps<SVGSVGElement>) => ( // SaaS / Tech
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
    <path d="M2 20h20" />
  </svg>
);
const Badge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 shadow-sm">
    {icon}
    {label}
  </span>
);

/* --- end icons --- */
const locations = [
  {
    city: "New York",
    address: "123 Broadway, Suite 500",
    zipcode: "New York, NY 10001",
    phone: "(555) 123-4567",
    email: "ny@onetreeseo.com",
    hours: "Mon-Fri: 9AM-6PM EST",
    icon: <MapPin className="h-5 w-5 text-blue-500" />
  },
  {
    city: "Los Angeles",
    address: "456 Sunset Blvd, Floor 10",
    zipcode: "Los Angeles, CA 90028",
    phone: "(555) 234-5678",
    email: "la@onetreeseo.com",
    hours: "Mon-Fri: 9AM-6PM PST",
    icon: <MapPin className="h-5 w-5 text-yellow-500" />
  },
  {
    city: "Chicago",
    address: "789 Michigan Ave, Suite 300",
    zipcode: "Chicago, IL 60611",
    phone: "(555) 345-6789",
    email: "chicago@onetreeseo.com",
    hours: "Mon-Fri: 9AM-6PM CST",
    icon: <MapPin className="h-5 w-5 text-green-500" />
  }
];
/* Values for "About" */
const values = [
  { title: "Transparency", description: "Clear reporting and strategy you can actually understand.", icon: <Sparkles className="h-5 w-5 text-yellow-500" /> },
  { title: "Performance",  description: "Targets, timelines, and outcomes—measured, not guessed.",   icon: <Target   className="h-5 w-5 text-green-500"  /> },
  { title: "Momentum",     description: "Compounding gains via technical + content + links.",        icon: <TrendingUp className="h-5 w-5 text-blue-600" /> },
  { title: "Speed",        description: "Fast comms and faster execution. No black-box fluff.",      icon: <Zap      className="h-5 w-5 text-indigo-500" /> },
];

/* Services data */
const services = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Technical SEO",
    description: "Complete website optimization including site speed, mobile responsiveness, and search engine crawlability.",
    features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "XML Sitemaps"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Content Marketing",
    description: "Strategic content creation that engages your audience and drives organic traffic to your website.",
    features: ["Keyword Research", "Blog Writing", "Content Strategy", "SEO Copywriting"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your area with targeted local optimization.",
    features: ["Google My Business", "Local Citations", "Review Management", "Local Link Building"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Link Building",
    description: "High-quality backlink acquisition to boost your domain authority and search engine rankings.",
    features: ["Guest Posting", "Digital PR", "Broken Link Building", "Competitor Analysis"],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "PPC Management",
    description: "Maximize your ad spend with data-driven pay-per-click campaigns across Google and social platforms.",
    features: ["Google Ads", "Facebook Ads", "Keyword Bidding", "Landing Page Optimization"],
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking and reporting to measure success and optimize performance continuously.",
    features: ["Custom Dashboards", "Monthly Reports", "Goal Tracking", "ROI Analysis"],
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-50 to-cyan-50",
  },
];

/* Benefits data (optional, if you use it elsewhere) */
type Benefit = {
  icon: React.ReactNode;
  title: string;
  percentage: string;
  description: string;
  gradient: string;
  bgGradient: string;
};

const benefits: Benefit[] = [
  { icon: <TrendingUp className="h-8 w-8 text-green-500" />,  title: "Increase Organic Traffic", percentage: "+247%", description: "Average increase in organic website traffic within 6 months", gradient: "from-green-400 to-emerald-500", bgGradient: "from-green-50 to-emerald-50" },
  { icon: <DollarSign className="h-8 w-8 text-blue-500" />,   title: "Higher ROI",               percentage: "685%",  description: "Average return on investment compared to traditional advertising", gradient: "from-blue-400 to-cyan-500",  bgGradient: "from-blue-50 to-cyan-50" },
  { icon: <Users className="h-8 w-8 text-purple-500" />,      title: "Better Lead Quality",      percentage: "+156%", description: "Improvement in lead quality from organic search traffic", gradient: "from-purple-400 to-pink-500", bgGradient: "from-purple-50 to-pink-50" },
  { icon: <Globe className="h-8 w-8 text-orange-500" />,      title: "Brand Visibility",         percentage: "+89%",  description: "Increase in brand awareness and online presence",        gradient: "from-orange-400 to-red-500",  bgGradient: "from-orange-50 to-red-50" },
  { icon: <Eye className="h-8 w-8 text-red-500" />,           title: "Page 1 Rankings",          percentage: "76%",   description: "Of our clients' target keywords rank on Google's first page", gradient: "from-red-400 to-pink-500", bgGradient: "from-red-50 to-pink-50" },
  { icon: <MousePointer className="h-8 w-8 text-teal-500" />, title: "Conversion Rate",          percentage: "+92%",  description: "Improvement in website conversion rates through optimization", gradient: "from-teal-400 to-cyan-500", bgGradient: "from-teal-50 to-cyan-50" },
];

const reasons = [
  {
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    title: "Proven Results",
    description: "Our strategies have helped clients achieve average traffic increases of 300% within 6 months."
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    title: "Fast Implementation",
    description: "We start delivering results within the first 30 days of engagement with quick wins and optimizations."
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-500" />,
    title: "White-Hat Only",
    description: "We follow Google's guidelines strictly, ensuring your website's long-term safety and sustainability."
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500" />,
    title: "Dedicated Support",
    description: "Your dedicated account manager provides regular updates and is always available for consultation."
  }
];

const industryStats = [
  {
    stat: "93% of online experiences begin with a search engine",
    icon: <Globe className="h-6 w-6" />,
    insight: "Search is the primary gateway to the internet",
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    stat: "75% of users never scroll past the first page of search results",
    icon: <Eye className="h-6 w-6" />,
    insight: "First page rankings are crucial for visibility",
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    stat: "SEO leads have a 14.6% close rate vs 1.7% for outbound leads",
    icon: <Target className="h-6 w-6" />,
    insight: "Organic traffic converts significantly better",
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    stat: "61% of marketers say improving SEO is their top priority",
    icon: <TrendingUp className="h-6 w-6" />,
    insight: "SEO is recognized as a critical growth driver",
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    stat: "68% of online experiences start with organic search",
    icon: <BarChart3 className="h-6 w-6" />,
    insight: "Organic search dominates web traffic sources",
    gradient: "from-indigo-400 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
  },
  {
    stat: "53% of website traffic comes from organic search",
    icon: <Users className="h-6 w-6" />,
    insight: "More than half of all website visitors find you through search",
    gradient: "from-teal-400 to-cyan-500",
    bgGradient: "from-teal-50 to-cyan-50",
  },
];

const projects = [
    {
      title: "E-commerce Fashion Store",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU1MTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: {
        traffic: "+340%",
        ranking: "85% Top 3",
        revenue: "+280%"
      },
      description: "Transformed an online fashion retailer's SEO strategy, resulting in massive organic growth and revenue increase.",
      timeframe: "6 months"
    },
    {
      title: "Local Service Business",
      industry: "Home Services",
      image: "https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTU0ODYxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: {
        traffic: "+450%",
        ranking: "Page 1",
        leads: "+320%"
      },
      description: "Helped a local HVAC company dominate their geographic market through strategic local SEO optimization.",
      timeframe: "4 months"
    },
    {
      title: "SaaS Technology Platform",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTU1MTc5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: {
        traffic: "+290%",
        ranking: "92% Top 10",
        signups: "+180%"
      },
      description: "Elevated a B2B SaaS platform's organic visibility and increased qualified demo requests significantly.",
      timeframe: "8 months"
    }
  ];

  const testimonials = [
    {
      quote: "OneTree SEO transformed our online presence. We went from page 3 to dominating page 1 for our main keywords.",
      author: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "Marketing Director"
    },
    {
      quote: "The results speak for themselves - 340% increase in organic traffic and our best year ever in terms of revenue.",
      author: "Michael Chen",
      company: "Urban Fashion Co.",
      role: "CEO"
    },
    {
      quote: "Professional, knowledgeable, and results-driven. OneTree SEO exceeded all our expectations.",
      author: "David Rodriguez",
      company: "HomeComfort HVAC",
      role: "Owner"
    }
  ];
  const serviceAreas = [
    "New York Metro", "Los Angeles County", "Chicago Metro", "San Francisco Bay Area",
    "Boston", "Philadelphia", "Washington DC", "Atlanta", "Miami", "Dallas",
    "Houston", "Phoenix", "Seattle", "Denver", "Austin", "San Diego"
  ];
  // handlers (TS-friendly)



// inline icons (no external deps)

const MessageCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 1 1 9-8.5Z" />
    <path d="M3.5 20.5 5 16" />
  </svg>
);

// contact info (uses inline icons above)
const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    content: "(555) 123-4567",
    subtext: "Mon-Fri, 9AM-6PM EST",
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    content: "hello@onetreeseo.com",
    subtext: "We respond within 24 hours",
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Headquarters",
    content: "123 Broadway, Suite 500",
    subtext: "New York, NY 10001",
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Live Chat",
    content: "Available on website",
    subtext: "Mon-Fri, 9AM-6PM EST",
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
];


export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-xl float-animation" />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-full blur-lg"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-green-200/40 to-blue-200/40 rounded-full blur-lg bounce-subtle"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-blue-300/30 rounded-lg rotate-45 rotate-slow" />
          <div
            className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-purple-300/30 rounded-full pulse-grow"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center subtle-glow-bg">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 border border-blue-200/50 slide-in-up">
                  <Sparkles className="mr-2 h-4 w-4 text-yellow-500 animate-pulse" />
                  #1 SEO Agency - Trusted by 500+ Businesses
                  <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
                </div>

                <h1
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight slide-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  Grow Your Business with
                  <span className="gradient-text block"> Expert SEO</span>
                </h1>

                <p
                  className="text-xl text-gray-600 leading-relaxed slide-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  We help businesses increase their online visibility, drive more qualified traffic,
                  and convert visitors into customers through proven SEO strategies.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 slide-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Button size="lg" className="glow-button border-0 text-white group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Get Free SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden border-2 hover:border-purple-300 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="relative flex items-center">
                    <Play className="mr-2 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    Watch Our Process
                  </span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-200 slide-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center group cursor-pointer">
                    <div className="relative">
                      <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">500+</div>
                      <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                    </div>
                    <div className="text-sm text-gray-600">Websites Optimized</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="relative">
                      <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">95%</div>
                      <Target className="absolute -top-2 -right-2 h-4 w-4 text-green-400 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="relative">
                      <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">3x</div>
                      <Zap className="absolute -top-2 -right-2 h-4 w-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                    </div>
                    <div className="text-sm text-gray-600">Average Traffic Increase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative slide-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl tilt-hover">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhTRU8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTU1MTc5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="SEO Analytics Dashboard"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 shimmer" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 float-animation">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full pulse-grow" />
                    <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full blur-md opacity-50 m-auto" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Organic Traffic</div>
                    <div className="text-xl font-bold gradient-text">+247%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-full shadow-xl text-white bounce-subtle">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NTU1MTc5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="OneTree SEO Team"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">8+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">About OneTree SEO</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2016, OneTree SEO has been at the forefront of digital marketing innovation.
                  We believe every business deserves to be found online—and we make that happen through
                  strategic SEO and digital marketing.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our data-driven approach combines technical expertise with creative thinking to deliver
                  sustainable growth. We don’t just improve rankings—we transform businesses.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {value.icon}
                      <h3 className="font-semibold text-gray-900">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 border border-blue-200/50 slide-in-up">
              <Sparkles className="mr-2 h-4 w-4 text-yellow-500 animate-pulse" />
              Our Expert Services
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 slide-in-up" style={{ animationDelay: "0.2s" }}>
              Comprehensive <span className="gradient-text">SEO Solutions</span>
            </h2>

            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              We offer comprehensive digital marketing solutions designed to increase your online visibility,
              drive qualified traffic, and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group cursor-pointer tilt-hover slide-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500`}
                />

                <CardHeader className="space-y-4 relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative`}
                  >
                    {service.icon}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-lg blur transition-all duration-300`}
                    />
                  </div>

                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-gray-900 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors"
                      >
                        <div
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 slide-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Boost Your Rankings?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Let our expert team create a custom SEO strategy tailored to your business goals and industry.
                </p>
                <button className="glow-button border-0 text-white px-8 py-3 rounded-lg font-semibold">
                  <span className="flex items-center">
                    Get Started Today
                    <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose OneTree SEO?
              </h2>
              <p className="text-lg text-gray-600">
                We're not just another SEO agency. We're your strategic partner in digital growth, committed to delivering measurable results that matter to your business.
              </p>
            </div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTU0ODYxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Google Partner</div>
                <div className="text-lg font-bold text-primary">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl bounce-subtle"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-10 w-8 h-8 border-2 border-blue-300/30 rounded-lg rotate-45 rotate-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-purple-300/30 rounded-full pulse-grow"></div>
        <div className="absolute top-1/2 right-10 w-10 h-10 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-lg transform rotate-12 bounce-subtle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header with creative elements */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm font-medium text-gray-700 border border-green-200/50 slide-in-up">
            <Zap className="mr-2 h-4 w-4 text-yellow-500 animate-pulse" />
            Proven Results & Impact
            <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 slide-in-up" style={{ animationDelay: '0.2s' }}>
            The <span className="gradient-text">Power of SEO</span> for Your Business
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up" style={{ animationDelay: '0.4s' }}>
            Search engine optimization isn't just about rankings – it's about driving real business results and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Enhanced Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 group cursor-pointer tilt-hover slide-in-up overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Glowing effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:scale-110 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div className="relative">
                      <span className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">
                        {benefit.percentage}
                      </span>
                      <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <CardTitle className="text-lg mb-2 group-hover:text-gray-900 transition-colors">{benefit.title}</CardTitle>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right - Enhanced Image */}
          <div className="space-y-8 slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl tilt-hover">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTU1MTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business Growth Statistics"
                  className="w-full h-auto"
                />
                
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Enhanced Results Summary */}
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl border border-gray-100 relative overflow-hidden shadow-lg">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Target className="mr-2 h-6 w-6 text-blue-500" />
                  What This Means for Your Business
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">More Qualified Traffic:</strong> Attract visitors who are actively searching for your products or services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Better ROI:</strong> SEO provides long-term value with compounding returns on your investment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Increased Authority:</strong> Higher search rankings establish credibility and trust with your audience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Competitive Advantage:</strong> Outrank competitors and capture market share in your industry
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-12 rounded-2xl relative overflow-hidden slide-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-size-200 animate-gradient-x"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl float-animation"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full blur-lg bounce-subtle"></div>
          <div className="absolute top-1/2 left-8 w-6 h-6 bg-white/15 rounded-full blur-md pulse-grow"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Zap className="mr-2 h-8 w-8 animate-pulse" />
              <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
              <Sparkles className="ml-2 h-6 w-6 animate-pulse" />
            </div>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have grown with our SEO expertise.
            </p>
            
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
              <span className="flex items-center">
                Start Your SEO Journey Today
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="industry-stats" className="py-20 bg-white relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/15 to-purple-200/15 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-green-200/15 to-blue-200/15 rounded-full blur-2xl bounce-subtle"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-pink-200/10 to-orange-200/10 rounded-full blur-xl pulse-grow"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 right-10 w-8 h-8 border-2 border-blue-300/20 rounded-lg rotate-45 rotate-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-6 h-6 border-2 border-purple-300/20 rounded-full pulse-grow"></div>
        <div className="absolute top-3/4 right-1/3 w-10 h-10 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-lg transform rotate-12 bounce-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 border border-blue-200/50 slide-in-up">
            <BarChart3 className="mr-2 h-4 w-4 text-blue-500" />
            Industry Insights & Data
            <Sparkles className="ml-2 h-4 w-4 text-yellow-500 animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 slide-in-up" style={{ animationDelay: '0.2s' }}>
            The <span className="gradient-text">Numbers Behind</span> SEO Success
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up" style={{ animationDelay: '0.4s' }}>
            Understanding industry statistics helps businesses make informed decisions about their digital marketing investments and SEO strategies.
          </p>
        </div>

        <div className="mb-16">
          {/* Full Width Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industryStats.map((item, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative slide-in-up aspect-square"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Glowing effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                <CardContent className="p-6 relative z-10 h-full flex flex-col items-center justify-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.bgGradient} rounded-xl flex items-center justify-center text-gray-700 group-hover:scale-110 transition-all duration-300 mb-1`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-gray-900 transition-colors leading-tight">
                      {item.stat}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors line-clamp-3 leading-snug">
                      {item.insight}
                    </p>
                  </div>
                  
                  {/* Hover sparkles */}
                  <Sparkles className="absolute top-4 right-4 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                  
                  {/* Hover arrow */}
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-y-1 transition-all opacity-0 group-hover:opacity-100" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden slide-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-blue-200/20 rounded-full blur-lg float-animation"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-200/30 rounded-full blur-md bounce-subtle"></div>
          <div className="absolute top-1/2 right-8 w-4 h-4 bg-pink-200/25 rounded-full blur-sm pulse-grow"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Target className="mr-2 h-6 w-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to Join the Success Stories?</h3>
              <Sparkles className="ml-2 h-6 w-6 text-yellow-500 animate-pulse" />
            </div>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
              Don't let your competitors dominate the search results. Start your SEO journey today and become part of these winning statistics.
            </p>
            
            <button className="glow-button border-0 text-white px-8 py-4 rounded-lg font-semibold group">
              <span className="flex items-center relative z-10">
                Get Your Free SEO Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center space-y-6 mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
        Success Stories
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        See how we've helped businesses across different industries achieve remarkable SEO results and sustainable growth.
      </p>
    </div>

    {/* Case Studies */}
    <div className="grid lg:grid-cols-3 gap-8 mb-20">
      {projects.map((project, index) => (
        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <ImageWithFallback
              src={
                project.image.includes("images.unsplash.com")
                  ? project.image.split("?")[0] // strip tracking/query gunk
                  : project.image
              }
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              
            </div>
          </div>
          
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {project.title}
              {/* Removed ExternalLink icon */}
            </CardTitle>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">{project.results.traffic}</div>
                  <div className="text-xs text-gray-600">Traffic</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">{project.results.ranking}</div>
                  <div className="text-xs text-gray-600">Rankings</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600">
                    {project.results.revenue || project.results.leads || project.results.signups}
                  </div>
                  <div className="text-xs text-gray-600">
                    {project.results.revenue ? "Revenue" : project.results.leads ? "Leads" : "Signups"}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-600">Timeframe: {project.timeframe}</span>
                {/* Inline TrendingUp icon (replaces lucide-react) */}
                <svg
                  className="h-4 w-4 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 7l-7.5 7.5-5-5L2 17" />
                  <path d="M16 7h6v6" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Testimonials */}
    <div className="bg-gray-50 p-12 rounded-2xl">
      <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            {/* Quote icon badge */}
            <div className="mb-3">
              <svg
                className="h-6 w-6 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a6 6 0 0 0-6-6zm10 0A5.17 5.17 0 0 0 12 11.17V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a6 6 0 0 0-6-6z"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
            <div className="border-t border-gray-100 pt-4">
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
              <div className="text-sm text-primary">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're strategically located to serve businesses across major metropolitan areas, with remote support available nationwide.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{location.city}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-600">{location.address}</p>
                  <p className="text-gray-600">{location.zipcode}</p>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{location.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{location.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-white p-12 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h3>
            <p className="text-gray-600">
              We provide SEO and digital marketing services to businesses in these metropolitan areas and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your area listed? We work with businesses nationwide through our remote services.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us for Your Area
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
