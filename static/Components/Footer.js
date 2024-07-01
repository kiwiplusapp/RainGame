import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center space-x-2">
      <NavLink
        to="/ref"
        className={({ isActive }) => {
          return `

${
  isActive
    ? "w-[20%] h-[65px] pt-1 bg-activebg border-[1px] border-activeborder flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
    : "w-[20%] h-[65px] pt-1 bg-cards border-[1px] border-borders flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
}
    `;
        }}
      >
        <img src='https://ucarecdn.com/e81043a5-5ff7-40ce-b5cf-d05ab10bb8ad/ref.webp' className="w-[32px] -mb-1" alt="ref" />
        <span className="font-medium">Ref</span>
      </NavLink>
      <NavLink
        to="/tasks"
        className={({ isActive }) => {
          return `

${
  isActive
    ? "w-[20%] h-[65px] pt-1 bg-activebg border-[1px] border-activeborder flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
    : "w-[20%] h-[65px] pt-1 bg-cards border-[1px] border-borders flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
}
    `;
        }}
      >
        <img src='https://ucarecdn.com/ed0e14a1-bbcc-4589-9195-c6d196f44400/tasks.webp' className="w-[30px]" alt="tasks" />
        <span className="font-medium">Tasks</span>
      </NavLink>

      {/*  */}

      <NavLink
        to="/"
        className={({ isActive }) => {
          return `

${
  isActive
    ? "w-[20%] h-[65px] pt-1 bg-activebg border-[1px] border-activeborder flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
    : "w-[20%] h-[65px] pt-1 bg-cards border-[1px] border-borders flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
}
    `;
        }}
      >
        <img src='https://ucarecdn.com/75b79e62-72e3-4a06-a703-6ac82f1844f4/coinsmall.webp' className="w-[30px] -mb-[1px]" alt="tap" />
        <span className="font-medium">Tap</span>
      </NavLink>
      <NavLink
        to="/boost"
        className={({ isActive }) => {
          return `

${
  isActive
    ? "w-[20%] h-[65px] pt-[8px] bg-activebg border-[1px] border-activeborder flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
    : "w-[20%] h-[65px] pt-[8px] bg-cards border-[1px] border-borders flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
}
    `;
        }}
      >
        <img src='https://ucarecdn.com/1f8bb3c2-272e-4bdd-8e59-5cf692bafe3f/boost.webp'className="w-[28px] -mb-[2px]" alt="boost" />
        <span className="font-medium">Boost</span>
      </NavLink>

      {/*  */}

      <NavLink
        to="/stats"
        className={({ isActive }) => {
          return `

${
  isActive
    ? "w-[20%] h-[65px] pt-[8px] bg-activebg border-[1px] border-activeborder flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
    : "w-[20%] h-[65px] pt-[8px] bg-cards border-[1px] border-borders flex flex-col rounded-[10px] items-center justify-center text-[#fff] text-[15px]"
}
    `;
        }}
      >
        <img src='https://ucarecdn.com/70e18951-d681-44bd-908b-03fc768a57a8/stats.webp' className="w-[24px]" alt="stats" />
        <span className="font-medium">Stats</span>
      </NavLink>
    </div>
  );
};

export default Footer;
