import { InfiniteStrip } from "../common";
import bentoInfo from "./styles/BentoInfo.module.css";

const cardData = [
  {
    id: 1,
    user: {
      name: "Luke Jordan",
      role: "Youtuber",
      image:
        "https://i.pinimg.com/736x/e6/2a/a9/e62aa9eb66b4781b2ba6b6a761625275.jpg",
    },
    review:
      "The support and community within Bento is hands down the best I've ever seen from any company, ever. Any question I have is always answered quickly and effectively - and I have many questions as someone without a lot of experience in the email marketing field.",
  },
  {
    id: 2,
    user: {
      name: "John Doe",
      role: "Developer",
      image:
        "https://i.pinimg.com/736x/60/6e/27/606e27da8528efb78f42690df07534ad.jpg",
    },
    review:
      "Bento has completely transformed the way I approach email marketing. The tools are intuitive and the community is incredibly supportive.",
  },
  {
    id: 3,
    user: {
      name: "Jane Smith",
      role: "Designer",
      image:
        "https://i.pinimg.com/736x/f4/e4/dc/f4e4dc01f9c7e5d316f0f85d827b7d12.jpg",
    },
    review:
      "Bento's platform is not only powerful but also user-friendly. I was able to create stunning email campaigns in no time.",
  },
  {
    id: 4,
    user: {
      name: "Alice Johnson",
      role: "Entrepreneur",
      image: "https://i.pinimg.com/736x/2b/a8/8b/2ba88b34fa184f4648e6daa900f0b331.jpg"
    },
    review: "Bento has been a game-changer for my business. The analytics and insights provided have helped me understand my audience better and improve my campaigns.",
  }
];

type CardProps = {
  id?: number;
  user: {
    name: string;
    role: string;
    image: string;
  };
  review: string;
};

const Card = ({ user, review }: CardProps) => (
  <div className="left-0 top-0">
    <div className="relative z-0 size-full p-6 bg-[#191a1b54] flex items-center justify-center rounded-[12px] w-sm mr-4 mt-4 overflow-visible opacity-75 hover:opacity-100 h-max">
      {/* Card content */}
      <div>
        <h3 className="text-base lg:text-md font-medium tracking-tight text-white">
          <p>{review}</p>
        </h3>
        <footer className="mt-4">
          <div className="flex">
            {/* Avatar */}
            <div className="md:flex shrik-0">
              <img
                src={user.image}
                alt="avatar"
                className="mx-auto size-8 rounded-xl"
              />
            </div>
            {/* Info */}
            <div className="ml-2 md:flex md:items-center">
              <p className="text-white opacity-50 text-base mr-2 leading-none">
                <strong>{user.name}</strong>
                <br />
                {user.role}
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* Mask */}
      <div className={bentoInfo.gradientMask} />
    </div>
  </div>
);

const Message = () => (
  <div
    className="container absolute inset-0 flex items-center justify-center text-center z-10 text-white max-w-full"
    style={{ background: "radial-gradient(rgb(7, 7, 7), rgba(7, 7, 7, 0.19))" }}
  >
    <div className="relative">
      <div className="mb-2 text-5xl sm:text-6xl font-black tracking-normal leading-relaxed lg:mb-1 max-w-full">
        <h2 className="text-[#D2BDFF]">Coursify</h2>
        <div className="leading-tight font-semibold text-lg">
          We can help you move from
          <br />
          <span className="text-[#D2BDFF]"> Zero to Hero</span>
        </div>
      </div>
    </div>
  </div>
);

export const ReviewsSection = () => {
  return (
    <div className="mt-4 mx-auto max-w-7xl px-4 sm:px-6">
      <div className="size-full">
        <div className="bg-[#191a1b54] z-0 size-full p-0 roundex-xl relative flex flex-col items-center overflow-hidden">
          {/* Title */}
          <Message />
          {/* Reviews */}
          <div className="block pb-16 overflow-hidden space-x-4">
            {/* Primera seccion */}
            <InfiniteStrip velocity={15}>
              <div className="relative size-full flex flex-flow overflow-hidden">
                {cardData.map((card: CardProps) => (
                  <Card key={card.id} user={card.user} review={card.review} />
                ))}
              </div>
            </InfiniteStrip>
            {/* Segunda seccion */}
            <InfiniteStrip velocity={15}>
              <div className="relative size-full flex flex-flow overflow-hidden">
                {cardData.reverse().map((card: CardProps) => (
                  <Card key={card.id} user={card.user} review={card.review} />
                ))}
              </div>
            </InfiniteStrip>
          </div>
        </div>
      </div>
    </div>
  );
};
