import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen md:mt-[200px] mt-[80px] md:justify-center gap-12 md:flex-row flex-col">
      <div className="hidden md:flex md:w-[80%] w-[75%] md:flex-row flex-col justify-between ">
        <div className="flex flex-col gap-8 flex-wrap">
          <div className="text-[#fff] text-6xl">与您的 AI 开始流畅的聊天</div>

          <div className="text-[#fff] text-3xl flex flex-col gap-3">
            <p>通过与各种 AI机器人聊天</p>
            <p>您将准确了解面临的问题</p>
            <p>需要什么最佳解决方案</p>
            <p>以及何时开始下一次冒险</p>
          </div>

          <div>
            <div className="text-[#fff] bg-[#2d67f6] hover:bg-[#1f4dbe] p-2 rounded-xl w-[120px] text-center cursor-pointer">
              立即下载
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src="https://opencat.app/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmain-ui.b5ce8d90.jpeg&w=1200&q=75"
            width={400}
            height={700}
            alt=""
          />
        </div>
      </div>

      <div className="md:hidden flex-col p-4">
        <div className="text-[#fff] text-2xl">与您的 AI 开始流畅的聊天</div>

        <div className="text-[#fff] text-xl flex flex-col gap-3 mt-[24px]">
          <p>通过与各种 AI机器人聊天</p>
          <p>您将准确了解面临的问题</p>
          <p>需要什么最佳解决方案</p>
          <p>以及何时开始下一次冒险</p>
        </div>

        <div className="mt-[48px] flex justify-center">
          <Image
            src="https://opencat.app/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmain-ui.b5ce8d90.jpeg&w=1200&q=75"
            width={300}
            height={600}
            alt=""
          />
        </div>

        <div className="text-[#fff] bg-[#2d67f6] mt-[16px] hover:bg-[#1f4dbe] p-2 rounded-xl w-[120px] text-center cursor-pointer m-auto">
          立即下载
        </div>
      </div>
    </main>
  );
}
