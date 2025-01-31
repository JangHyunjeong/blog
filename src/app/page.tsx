import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="flex gap-10">
      <div className="w-40 h-40 bg-gray-200 rounded-md flex-shrink-0"></div>
      <div>
        <p className="font-medium text-2xl ">장현정</p>
        <p className="text-md mt-3 text-gray-800">
          간단한 소개가 들어가는 영역입니다. <br />이 영역이 다소 허전해 보이네요. 최대한 내용을
          늘려보도록 합시다. 블로그를 재미있게 만들어 봅시다. 이 블로그에는 학습한 내용과 일지들을
          작성하는 나만의 공간으로 꾸밀 생각입니다. 페이지로만 넣기에는 너무 적나요. 그런거 같기도
          하네요이 내용을 늘릴 것이 아니라면 이렇게 페이지로 따로 빼는게 의미가 있을까요? 두고봅시다
        </p>
        <ul className="flex gap-2 mt-6 text-2xl text-gray-800">
          <li className="">
            <Link
              href={'https://github.com/JangHyunjeong'}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-md"
            >
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              href={'jang.hyunjeong01@gmail.com'}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-md"
            >
              <FiMail />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
