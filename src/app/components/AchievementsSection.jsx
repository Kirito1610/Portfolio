import {
  ClockIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const achievementsList = [
  {
    metric: "Years Experience",
    value: "3",
    postfix: "+",
    icon: ClockIcon,
    description: "in production web development",
  },
  {
    metric: "Pages Shipped",
    value: "80",
    postfix: "+",
    icon: DocumentTextIcon,
    description: "responsive, SEO-ready pages",
  },
  {
    metric: "Product Pages",
    value: "10,000",
    postfix: "+",
    icon: ChartBarIcon,
    description: "with live data dashboards",
  },
  {
    metric: "Faster with AI",
    value: "60",
    postfix: "%",
    icon: BoltIcon,
    description: "implementation speed gain",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-6 sm:py-10">
      <div className="bg-white ring-1 ring-slate-200 shadow-sm rounded-2xl px-6 py-8 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-100">
          {achievementsList.map(({ metric, value, postfix, icon: Icon, description }, index) => (
            <div
              key={index}
              className="animate-scale-in flex flex-col items-center text-center px-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <p className="gradient-text text-4xl font-extrabold leading-none">
                {value}
                <span>{postfix}</span>
              </p>
              <p className="mt-1.5 text-sm font-semibold text-slate-700">{metric}</p>
              <p className="mt-0.5 text-xs text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
