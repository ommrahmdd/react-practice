interface IButtons {
  content: string;
}
export let MainBtn = ({ content }: IButtons) => (
  <button className="text-lg px-8 py-6 bg-growfyPrimaryBtn text-white rounded-full tracking-widest hover:opacity-50 transition-all duration-300 ease-in-out md:text-xl">
    {content}
  </button>
);
export let SBtn = ({ content }: IButtons) => (
  <button className="text-lg px-8 py-6 bg-growfyPColor text-white bg-opacity-20 rounded-full tracking-widest md:text-xl">
    {content}
  </button>
);
