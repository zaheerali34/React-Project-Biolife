import React from "react";

export const Articles = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-[5rem] px-6">
        <p className="text-gray-600 italic font-mono text-[0.8rem]">
          The freshest and most exciting news
        </p>
        <h2 className="text-5xl font-semibold">Our Latest Articles</h2>

        <div className="w-full h-[70vh] flex items-center justify-between gap-4 mt-5">
          <div className="w-full h-full">
            <div className='w-full h-1/2 bg-[url("./image/post-thumb-01.jpg")] bg-center bg-cover bg-no-repeat relative'>
              <div className="w-full h-full absolute hover:bg-[#0000003a] transition flex items-center justify-center"></div>
            </div>

            <div className="px-3 flex items-center flex-col text-center gap-3 pt-2">
              <h2 className="text-[1.3rem] font-semibold leading-[23px]">
                Ashwagandha: The #1 Herb in the World for Anxiety
              </h2>
              <div className="flex items-center gap-[7rem] mr-2">
                <div className="flex items-center gap-2">
                  <img
                    src="./image/01.jpg"
                    alt=""
                    className="w-[2rem] rounded-full"
                  />
                  <span>Admin</span>
                </div>

                <div className="flex items-center gap-6 cursor-pointer">
                  <div className="flex items-center w-5 gap-2">
                    <span>2</span>
                    <img src="./image/comment.png" alt="" />
                  </div>

                  <div className="flex items-center w-5 gap-2">
                    <span>2</span>
                    <img src="./image/love (1).png" alt="" />
                  </div>

                  <div className="w-5 ml-2">
                    <img src="./image/share.png" alt="" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum eius, saepe quos nihil, incidunt totam facere sequi
                  consectetur, quasi quibusdam dolores.
                </p>
                <h2 className="pt-2 uppercase font-bold text-green-500">
                  continue readng
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <div className='w-full h-1/2 bg-[url("./image/post-thumb-02.jpg")] bg-center bg-cover bg-no-repeat relative'>
              <div className="w-full h-full absolute hover:bg-[#0000003a] transition flex items-center justify-center"></div>
            </div>

            <div className="px-3 flex items-center flex-col text-center gap-3 pt-2">
              <h2 className="text-[1.3rem] font-semibold leading-[23px]">
                Ashwagandha: The #1 Herb in the World for Anxiety
              </h2>
              <div className="flex items-center gap-[7rem] mr-2">
                <div className="flex items-center gap-2">
                  <img
                    src="./image/02.jpg"
                    alt=""
                    className="w-[2rem] rounded-full"
                  />
                  <span>Admin</span>
                </div>

                <div className="flex items-center gap-6 cursor-pointer">
                  <div className="flex items-center w-5 gap-2">
                    <span>2</span>
                    <img src="./image/comment.png" alt="" />
                  </div>

                  <div className="flex items-center w-5 gap-2">
                    <span>2</span>
                    <img src="./image/love (1).png" alt="" />
                  </div>

                  <div className="w-5 ml-2">
                    <img src="./image/share.png" alt="" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum eius, saepe quos nihil, incidunt totam facere sequi
                  consectetur, quasi quibusdam dolores.
                </p>
                <h2 className="pt-2 uppercase font-bold text-green-500">
                  continue readng
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <div className='w-full h-1/2 bg-[url("./image/post-thumb-03.jpg")] bg-center bg-cover bg-no-repeat relative'>
              <div className="w-full h-full absolute hover:bg-[#0000003a] transition flex items-center justify-center"></div>
            </div>

            <div className="px-3 flex items-center flex-col text-center gap-3 pt-2">
              <h2 className="text-[1.3rem] font-semibold leading-[23px]">
                Ashwagandha: The #1 Herb in the World for Anxiety
              </h2>
              <div className="flex items-center gap-[7rem] mr-2">
                <div className="flex items-center gap-2">
                  <img
                    src="./image/03.jpg"
                    alt=""
                    className="w-[2rem] rounded-full"
                  />
                  <span>Admin</span>
                </div>

                <div className="flex items-center gap-6 cursor-pointer">
                  <div className="flex items-center w-5 gap-2">
                    <span>2</span>
                    <img src="./image/comment.png" alt="" />
                  </div>

                  <div className="flex items-center w-5 gap-2">
                    <span>2</span>
                    <img src="./image/love (1).png" alt="" />
                  </div>

                  <div className="w-5 ml-2">
                    <img src="./image/share.png" alt="" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum eius, saepe quos nihil, incidunt totam facere sequi
                  consectetur, quasi quibusdam dolores.
                </p>
                <h2 className="pt-2 uppercase font-bold text-green-500">
                  continue readng
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
