import { cn } from '@/lib/utils';
import { Marquee } from '../magicui/marquee';
import { Heart, Star, StarIcon, ThumbsUp } from 'lucide-react';
const reviewsGroup1 = [
  {
    name: 'Ali Raza',
    username: '@ali_raza',
    body: "I've explored countless platforms, but this one truly amazed me. From its sleek interface to seamless performance, it feels like everything was crafted with care. Arman has really put his heart into this. Massive respect!",
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Ali%20Raza',
  },
  {
    name: 'Fatima Khan',
    username: '@fatima_k',
    body: 'This experience has been nothing short of delightful. The thoughtfulness in design, the smooth transitions, and the attention to user needs are incredible. Shout out to Arman – this is seriously top-tier work!',
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Fatima%20Khan',
  },
  {
    name: 'Hassan Ahmed',
    username: '@hassan_ahmed',
    body: 'I wasn’t expecting this level of quality from a student project. Everything works flawlessly and looks amazing. Arman, you’ve outdone yourself. Keep making Pakistan proud!',
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Hassan%20Ahmed',
  },
  {
    name: 'Ayesha Siddiqui',
    username: '@ayesha_s',
    body: "I’m genuinely impressed by the polish and user experience. It feels like a premium product. If this is Arman’s early work, I can't imagine what his future creations will look like!",
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Ayesha%20Siddiqui',
  },
  {
    name: 'Zainab Tariq',
    username: '@zainab_t',
    body: 'This platform is a hidden gem. Everything from typography to responsiveness is nailed. Kudos to Arman and the team – this is what creativity looks like!',
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Zainab%20Tariq',
  },
  {
    name: 'Usman Javed',
    username: '@usman_j',
    body: 'It’s refreshing to see this level of creativity coming from Pakistan. Arman, your work is inspiring and speaks volumes of your dedication. This is how excellence is delivered.',
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Usman%20Javed',
  },
];

const reviewsGroup2 = [
  {
    name: 'Sara Imran',
    username: '@sara_i',
    body: 'Such clean UI and intuitive flow! I’ve shared this with my friends already. Arman, keep pushing – you’re clearly on a path to greatness. This is a job well done.',
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Sara%20Imran',
  },
  {
    name: 'Bilal Shaikh',
    username: '@bilal_s',
    body: "The design feels premium and modern. Everything just works beautifully. Huge respect for Arman – you've got a bright future ahead if you keep building like this.",
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Bilal%20Shaikh',
  },
  {
    name: 'Amna Rehman',
    username: '@amna_rehman',
    body: "From animations to responsiveness, everything feels tailor-made with care. It's rare to see such quality locally. Hats off to you Arman, keep shining!",
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Amna%20Rehman',
  },
  {
    name: 'Tariq Mehmood',
    username: '@tariq_mehmood',
    body: 'Clean code, clean UI, and a super smooth experience. I’ve bookmarked this just to show others what Arman built. Proud to see local talent rising like this.',
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Tariq%20Mehmood',
  },
  {
    name: 'Laiba Noor',
    username: '@laiba_noor',
    body: "Absolutely stunning! I could scroll here for hours. Arman has made something really special, and it deserves all the attention it's getting.",
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Laiba%20Noor',
  },
  {
    name: 'Arman Ali',
    username: '@arman_dev',
    body: 'Yes, I built this with passion and countless hours of hard work. I hope it inspires someone out there to believe in their own creativity. This is just the beginning.',
    img: 'https://api.dicebear.com/7.x/initials/svg?seed=Arman%20Ali',
  },
];

const firstRow = reviewsGroup1.slice(0, reviewsGroup1.length / 2);
const secondRow = reviewsGroup2.slice(reviewsGroup2.length / 2);

interface ReviewCardProps {
  name: string;
  username: string;
  img: string;
  body: string;
  rating?: number;
  verified?: boolean;
  likes?: number;
}
const ReviewCard = ({
  name,
  username,
  img,
  body,
  rating = 5,
  verified = true,
  likes = 24,
}: ReviewCardProps) => {
  return (
    <figure className="relative h-56   w-96 group cursor-pointer">
      {/* Glowing border that affects all cards in row on hover */}
      <div className="absolute inset-0 " />

      {/* Main card */}
      <div
        className={cn(
          'relative h-full w-full rounded-2xl p-6 flex flex-col gap-4',
          'bg-gray-900 border border-gray-700 ',
          'transition-all duration-300 hover:shadow-sm hover:shadow-gray-500',
          'overflow-hidden'
        )}
      >
        {/* Profile section */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              className="rounded-full w-10 h-10 object-cover border-2 border-blue-400 group-hover:border-cyan-300 transition-all"
              src={img}
              alt={name}
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900" />
          </div>

          <div>
            <h3 className="text-white font-manrope hover:text-cyan-200 transition-colors">
              {name}
            </h3>
            <p className="text-xs text-gray-400 hover:text-blue-300 transition-colors">
              @{username}
            </p>
          </div>

          <div className="ml-auto flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
        </div>

        {/* Review text */}
        <blockquote className="flex-1">
          <p className="text-gray-300 hover:text-white font-manrope text-justify text-sm tracking-wider">
            {body}
          </p>
        </blockquote>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-8 py-8">
      {/* First row with shared hover effect */}
      <div className="w-full hover:[&_figure]:[--glow-opacity:0.3] transition-all duration-500">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Second row with shared hover effect */}
      <div className="w-full hover:[&_figure]:[--glow-opacity:0.3] transition-all duration-500">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-950 to-transparent" />
    </div>
  );
}
