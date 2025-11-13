import clsx from "clsx";

export default function Home() {
  return (
    <div>
      <h1
        className={clsx(
          "text-3xl",
          "font-bold",
          "underline",
          "text-white",
          "text-center",
          "my-10",
        )}
      >
        Meu Texto aqui
      </h1>
    </div>
  );
}
