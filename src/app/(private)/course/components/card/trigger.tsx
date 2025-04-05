import { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";

type TriggerProps = {
  title: string;
  value: string;
  moduleNumber: number;
  amountLessons: number;
  amountTime: string;
  isModuleCompleted?: boolean;
  children: ReactNode;
};

export function Trigger({
  title,
  value,
  moduleNumber,
  amountLessons,
  amountTime,
  isModuleCompleted = false,
  children,
}: TriggerProps) {
  return (
    <Accordion.Item value={value}>
      <Accordion.Trigger className="group text-left flex items-center p-4 gap-4 w-full transition-colors hover:bg-zinc-100 cursor-pointer">
        <div className="relative">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="fill-transparent "
          >
            <circle
              cx="20"
              cy="20"
              r="18.5"
              strokeDasharray="119.38052083641213 119.38052083641213"
              strokeDashoffset="0"
              strokeWidth="3"
              className={`-rotate-90 origin-[50%_50%] transition-all duration-300 ease-in-out ${
                isModuleCompleted ? "stroke-green-600" : "stroke-zinc-200"
              }`}
            ></circle>
          </svg>
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm leading-none font-bold transition-colors ${
              isModuleCompleted ? "text-green-600" : "text-zinc-900"
            }`}
          >
            {moduleNumber}
          </span>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <h2
            className="text-md text-zinc-700 text-ellipsis overflow-hidden whitespace-nowrap"
            title="Iniciando com React"
          >
            {title}
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-zinc-900">
            <span>{amountLessons} aulas</span>
            <div className="flex flex-shrink-0 size-1 rounded-full bg-zinc-900"></div>
            <span>{amountTime}</span>
          </div>
        </div>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="text-zinc-900 shrink-0 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          width="1em"
          height="1em"
        >
          <path
            d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </Accordion.Trigger>
      {children}
    </Accordion.Item>
  );
}
