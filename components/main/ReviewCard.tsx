import { cn } from '@/lib/utils';
import { Marquee } from '../magicui/marquee';
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

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <>
      <figure
        className={cn(
          'relative h-52 w-96 cursor-pointer overflow-hidden rounded-md p-4 flex flex-col gap-4',
          // light styles
          ' bg-blue-950 border border-blue-200 h text-white/70 hover:text-indigo-200 transition'
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col items-start juss">
            <figcaption className="text-sm font-medium text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-justify">{body}</blockquote>
      </figure>
    </>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4  "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
    </div>
  );
}
