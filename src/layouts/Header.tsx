import Link from "next/link";
import { appConfig } from '@/utils/appConfig';

export const Header = () => {
  return (
    <div className="border-b border-gray-300">
      <div className="pt-16 pb-8">
        <div className="text-3xl font-bold text-gray-900">
          {appConfig.title}
        </div>
        <div className="text-xl">{appConfig.description}</div>
      </div>
      <div>
        <ul className="flex flex-wrap text-xl">
          <li className="mr-6">
            <Link href="/">
              <a className="border-none text-gray-700 hover:text-gray-900">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about/">
              <a className="border-none text-gray-700 hover:text-gray-900">
                About
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <a
              className="border-none text-gray-700 hover:text-gray-900"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
