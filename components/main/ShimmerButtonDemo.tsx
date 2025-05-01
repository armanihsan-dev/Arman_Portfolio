import { FaLocationArrow } from 'react-icons/fa6';
import { ShimmerButton } from '../magicui/shimmer-button';
import { Toast } from 'primereact/toast';

type props = {
  title: string;
};
export function ShimmerButtonDemo({ title }: props) {
  return (
    <a href="mailto:armanihsan224@gmail.com">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {title}
        </span>
        <FaLocationArrow className="hover-group text-white-400 text-xl ml-2" />
      </ShimmerButton>
    </a>
  );
}
