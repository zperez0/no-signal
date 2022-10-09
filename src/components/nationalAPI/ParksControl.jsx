import React from "react";
import "../UI/Background.css";
import yos from "../../images/yosemite.jpg";
import yellowstone from "../../images/yellowstone.jpg";
import glacier from "../../images/glacier.jpg";
import grand from "../../images/grand.jpg";
import zion from "../../images/zion.jpg";
import oly from "../../images/oly.jpg";
import teton from "../../images/teton.jpeg";
import rocky from "../../images/rocky.jpg";

const ParksControl = () => {
  return (
    <>
      <div className="background">
        <div className="py-10"></div>
        <div className="grid lg:grid-cols-4 gap-1">
          <div className="yos">
            <div className="flex justify-center">
              <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={yos} alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Yosemite National Park
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Not just a great valley, but a shrine to human foresight,
                    the strength of granite, the power of glaciers, the
                    persistence of life, and the tranquility of the High Sierra.
                    First protected in 1864, Yosemite National Park is best
                    known for its waterfalls, but within its nearly 1,200 square
                    miles, you can find deep valleys, grand meadows, ancient
                    giant sequoias, a vast wilderness area, and much more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="yel">
            <div className="flex justify-center">
              <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={yellowstone} alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Yellowstone National Park
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    On March 1, 1872, Yellowstone became the first national park
                    for all to enjoy the unique hydrothermal and geologic
                    features. Within Yellowstone's 2.2 million acres, visitors
                    have unparalleled opportunities to observe wildlife in an
                    intact ecosystem, explore geothermal areas that contain
                    about half the worlds active geysers, and view geologic
                    wonders like the Grand Canyon of the Yellowstone River.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="gla">
            <div className="flex justify-center">
              <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={glacier} alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Glacier National Park
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    A showcase of melting glaciers, alpine meadows, carved
                    valleys, and spectacular lakes. With over 700 miles of
                    trails, Glacier is a paradise for adventurous visitors
                    seeking wilderness steeped in human history. Relive the days
                    of old through historic chalets, lodges, and the famous
                    Going-to-the-Sun Road.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="gra">
            <div className="flex justify-center">
              <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={grand} alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Grand Canyon National Park
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Grand Canyon National Park, in northern Arizona, encompasses
                    278 miles (447 km) of the Colorado River and adjacent
                    uplands. Located on the ancestral homeland of 11 Associated
                    Tribes, Grand Canyon is one of the most spectacular examples
                    of erosion anywhere in the world—unmatched in the
                    incomparable vistas it offers visitors on the rim. South Rim
                    and North Rim are open 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="zio">
            <div className="flex justify-center">
              <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={zion} alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Zion National Park
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Follow the paths where native people and pioneers walked.
                    Gaze up at massive sandstone cliffs of cream, pink, and red
                    that soar into a brilliant blue sky. Experience wilderness
                    in a narrow slot canyon. Zions unique array of plants and
                    animals will enchant you as you absorb the rich history of
                    the past and enjoy the excitement of present day adventures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="oly">
            <div className="flex justify-center">
              <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={oly} alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Olympic National Park
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    With its incredible range of precipitation and elevation,
                    diversity is the hallmark of Olympic National Park.
                    Encompassing nearly a million acres, the park protects a
                    vast wilderness, thousands of years of human history, and
                    several distinctly different ecosystems, including
                    glacier-capped mountains, old-growth temperate rain forests,
                    and over 70 miles of wild coastline. Come explore!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="teton">
            <div className="flex justify-center">
              <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={teton} alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Grand Teton National Park
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Rising above a scene rich with extraordinary wildlife,
                    pristine lakes, and alpine terrain, the Teton Range stands
                    as a monument to the people who fought to protect it. These
                    are mountains of the imagination. Mountains that led to the
                    creation of Grand Teton National Park where you can explore
                    over two hundred miles of trails, float the Snake River, and
                    enjoy the serenity of this remarkable place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rocky">
            <div className="flex justify-center">
              <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={rocky} alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Rocky Mountain National Park
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Rocky Mountain National Park's 415 square miles (265,807
                    acres) encompasses a spectacular range of mountain
                    environments. From meadows found in the montane life zone to
                    glistening alpine lakes and up to the towering mountain
                    peaks, there is something for everyone to discover. Along
                    the way explore over 300 miles of hiking trails and
                    incredible wildlife viewing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParksControl;
