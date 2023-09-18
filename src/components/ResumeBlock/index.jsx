import { ResumeLink } from "../ResumeLink";

import "./ResumeBlock.scss";

export const ResumeBlock = ({ resumeData }) => {
  return (
    <div className="resume-block">
      <h1>{resumeData.title}</h1>
      <div className="resume-block__text">
        <p>{resumeData.body.greetings}</p>
        <p>
          {resumeData.body.realme}
          <b>{resumeData.body.fakeme}</b>.
        </p>
        <p dangerouslySetInnerHTML={{ __html: resumeData.body.rofl }}></p>
      </div>
      <ul className="resume-block__links">
        <li>
          <ResumeLink
            linkHref={"https://github.com/zhuzhaka"}
            linkText={resumeData.links.github.text}
            subText={resumeData.links.github.sub_text}
            subTextAlternate={resumeData.links.github.sub_text_alternate}
          />
        </li>
        <li>
          <ResumeLink
            linkHref={"https://www.behance.net/zhuzhaka"}
            linkText={resumeData.links.behance.text}
            subText={resumeData.links.behance.sub_text}
            subTextAlternate={resumeData.links.behance.sub_text_alternate}
          />
        </li>
        <li>
          <ResumeLink
            linkHref={"mailto:zhuzhaka.dog@gmail.com"}
            linkText={resumeData.links.email.text}
            subText={resumeData.links.email.sub_text}
            options={{ openInNewTab: false }}
          />
        </li>
        <li>
          <ResumeLink
            linkHref={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            linkText={resumeData.links.youtube.text}
            subText={resumeData.links.youtube.sub_text}
            subTextAlternate={resumeData.links.youtube.sub_text_alternate}
          />
        </li>
      </ul>
    </div>
  );
};
