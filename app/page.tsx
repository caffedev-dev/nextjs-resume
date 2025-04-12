import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";
import avatar from "@/public/avatar.svg";


import { generalData } from "@/data/general";
import { personalData } from "@/data/personal";
import { contentData } from "@/data/content";
import { educationData } from "@/data/education";
import { certificateData } from "@/data/certificate";
import { activityData } from "@/data/activity";

import type { Personal } from "@/data/personal";
import type { Content } from "@/data/content";
import type { Education } from "@/data/education";
import type { Certificate } from "@/data/certificate";
import type { Activity } from "@/data/activity";

type ContentProps = Content;
type EducationProps = Education;
type PersonalProps = Personal;
type CertificateProps = Certificate;
type ActivityProps = Activity;


const Content: React.FC<ContentProps> = ({ title, transcription, items }) => {
  return (
    <section className="my-14 text-sm">
      <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

      <div className="flex flex-col flex-1">
        <h3 className="mr-8">{title}</h3>
        <p className="text-slate-600 dark:text-gray-400">
            {transcription}
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-600 dark:text-gray-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <h4>{item.title}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
const Education: React.FC<EducationProps> = ({ title, transcription, items }) => {
  return (
    <section className="my-14 text-sm">
      <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

      <div className="flex flex-col flex-1">
        <h3 className="mr-8">{title}</h3>
        <p className="text-slate-600 dark:text-gray-400">
            {transcription}
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-600 dark:text-gray-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <h4>{item.title}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
const Personal: React.FC<PersonalProps> = ({ title, transcription, items }) => {
  return (
    <section className="my-14 text-sm">
      
      <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

      <div className="flex flex-col flex-1">
        <h3 className="mr-8">{title}</h3>
        <p className="text-slate-600 dark:text-gray-400">
          {transcription}
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                {item.label}
              </div>
              <div className="flex flex-col flex-1">
                <h4>{item.title}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
const Certificate: React.FC<CertificateProps> = ({ title, transcription, items }) => {
  return (
    <section className="my-14 text-sm">
      
      <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

      <div className="flex flex-col flex-1">
        <h3 className="mr-8">{title}</h3>
        <p className="text-slate-600 dark:text-gray-400">
          {transcription}
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-600 dark:text-gray-400">
                {/* {item.title} */}
              </div>
              <div className="flex flex-col flex-1">
                <h4>{item.title}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.level ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                  {item.level}
                </p>
                ):null}
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Activity: React.FC<ActivityProps> = ({ title, transcription, items }) => {
  return (
    <section className="my-14 text-sm">
      <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

      <div className="flex flex-col flex-1">
        <h3 className="mr-8">{title}</h3>
        <p className="text-slate-600 dark:text-gray-400">
            {transcription}
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <h4>{item.title}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-20 relative min-h-screen -light">
        <section className="flex items-center">
          <Image
            alt="박영진"
            src={generalData.avatar}
            // src = "/avatar.jpg"
            width={120}
            height={120}
            className="rounded-full object-contain"
          />
          <div className="ml-9">
            <h1 className="mb-3 text-2xl text-slate-900 dark:text-slate-100">
              {generalData.name}
            </h1>
          
            <p className="text-sm text-slate-600 dark:text-gray-400">
              {generalData.position}
            </p>  
            <p className="text-sm text-slate-600 dark:text-gray-400">
              {generalData.jobTitle}
            </p>

            {generalData.website ? (
              <p className="text-sm text-slate-600 dark:text-gray-400">
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {generalData.website
                    .replace(/(^\w+:|^)\/\//, "")
                    .replace("www.", "")}
                </a>
              </p>
            ) : null}
          
            
          </div>
        </section>
{/* About */}
        <section className="my-14 text-sm">
          
          {/* <h3 className="mb-1 text-slate-900 dark:text-slate-100">About</h3> */}
          {/* <div className="flex flex-col flex-1">
        <h3 className="mr-8">소개</h3>
        <p className="text-slate-600 dark:text-gray-400">
            Introduce
        </p>
      </div> */}
          <div className="text-slate-600 dark:text-gray-400 mt-6">
            <p>{generalData.about}</p>
          </div>
        </section>

  {/* Personal Data */}
        {
          personalData.map((personal, index) => {
            return <Personal {...personal} key = {index} />;
            }
          )
        }
  {/* Education Data */}
        {
          educationData.map((education, index) => {
            return <Content {...education} key={index} />;
              }
          )
        }


  {/* Skill and Certificate Data */}
  {
    certificateData.map((certificate, index)=>{
      return <Certificate {...certificate} key = {index}/>
      
    })
  }
{/* Content Data */}
        {
          contentData.map((content, index) => {
            return <Content {...content} key={index} />;
              }
          )
        }
{/* Activity */}
{
  activityData.map((activity, index) => {
    return <Activity {...activity} key={index} />;
      }
  )
}
{/* Social */}
        <section className="my-14 text-sm">

        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

        <div className="flex flex-col flex-1">
        <h3 className="mr-8">소셜</h3>
        <p className="text-slate-600 dark:text-gray-400">
          Social Networks
        </p>
      </div>

          {/* <h3 className="mb-6 text-slate-900">Contact</h3> */}
          <div className="flex flex-col gap-6 mt-6">
            {generalData.contacts.map((contact, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="mr-8 max-w-[100px] w-full text-slate-600 dark:text-gray-400">
                    {contact.label}
                  </div>
                  <div className="flex flex-col flex-1 text-slate-600 dark:text-gray-400">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-slate-900 dark:text-slate-100"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="px-6 absolute left-0 bottom-6">
          <ThemeSwitch />
        </div>
      </main>
    </>
  );
}
