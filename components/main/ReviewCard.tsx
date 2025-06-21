import { cn } from '@/lib/utils';
import { Marquee } from '../magicui/marquee';
import { Star, Heart, ThumbsUp } from 'lucide-react';
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
    <div className="group perspective-1000 w-96 h-64">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110" />

      {/* Main card container */}
      <div
        className={cn(
          'relative h-full w-full rounded-3xl p-6 flex flex-col',
          'bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90',
          'backdrop-blur-xl border border-white/10',
          'shadow-2xl shadow-black/20',
          'transition-all duration-500 ease-out',
          'hover:transform hover:scale-[1.02] hover:-translate-y-2',
          'hover:shadow-3xl hover:shadow-purple-500/20',
          'overflow-hidden group cursor-pointer'
        )}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Floating orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg animate-pulse delay-300" />

        {/* Header section */}
        <div className="relative flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* Enhanced avatar */}
            <div className="relative group/avatar">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-[2px] group-hover:from-pink-500 group-hover:to-violet-500 transition-all duration-500">
                <div className="bg-slate-900 rounded-full p-[2px]">
                  <img
                    className="rounded-full w-12 h-12 object-cover transition-transform duration-300 group-hover/avatar:scale-110"
                    src={img}
                    alt={name}
                  />
                </div>
              </div>

              {/* Status indicator */}
              {verified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </div>

            {/* User info */}
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-lg tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {name}
              </h3>
              <p className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors">
                {username}
              </p>
            </div>
          </div>

          {/* Interactive stats */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Heart className="w-3 h-3 text-red-400" />
              <span className="text-xs text-slate-400">{likes}</span>
            </button>
          </div>
        </div>

        {/* Star rating with animation */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4 transition-all duration-300',
                i < rating
                  ? 'text-yellow-400 fill-yellow-400 group-hover:scale-110'
                  : 'text-slate-600 group-hover:text-slate-500',
                'hover:rotate-12'
              )}
              style={{
                transitionDelay: `${i * 50}ms`,
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
          <span className="ml-2 text-sm text-slate-400 font-medium">
            {rating}.0
          </span>
        </div>

        {/* Review content */}
        <blockquote className="flex-1 relative">
          <div className="absolute top-0 left-0 text-6xl text-purple-500/20 font-serif leading-none">
            "
          </div>
          <p className="text-slate-300 leading-relaxed text-sm pt-4 relative z-10 group-hover:text-white transition-colors duration-300">
            {body}
          </p>
        </blockquote>

        {/* Footer actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>2 days ago</span>
          </div>

          <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 hover:from-purple-600/30 hover:to-cyan-600/30 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
            <ThumbsUp className="w-3 h-3 text-cyan-400" />
            <span className="text-xs text-slate-300">Helpful</span>
          </button>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-4 -bottom-4 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transform -skew-x-12 transition-opacity duration-700" />
      </div>
    </div>
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
