import { useState } from 'react';
import { ResumeLink } from '../ResumeLink';
import './ResumeBlock.scss'

export const ResumeBlock = ({resumeData}) => {
	const [gitSubText, setGitSubText] = useState("чужие проекты, которые автор выдает за свои");
	const [behanceSubText, setBehanceSubText] = useState("велиКАЛепные дизайны автора");
	const [youtubeSubText, setYoutubeSubText] = useState("а еще автор инфоцыган");

  return (
    <div className="resume-block">
				<h1>{resumeData.title}</h1>
				<div className="resume-block__text">
					<p>{resumeData.body.greetings}</p>
					<p>{resumeData.body.realme}<b>{resumeData.body.fakeme}</b>.</p>
					<p dangerouslySetInnerHTML={{__html: resumeData.body.rofl}}></p>					
				</div>
					<ul className="resume-block__links">
						<li>
							<ResumeLink
								linkHref={"https://github.com/zhuzhaka"}
								linkText={"GitHub"}
								subText={gitSubText}
								onClick={() => {
									setGitSubText("Ладно, ладно! Это говнокод автора, но ему помогали!");
								}}
							/>
						</li>
						<li>
							<ResumeLink
								linkHref={"https://www.behance.net/zhuzhaka"}
								linkText={"Behance"}
								subText={behanceSubText}
								onClick={() => {
									setBehanceSubText("Тут еще веселее чем с гитхабом");
								}}
							/>
						</li>
						<li>
							<ResumeLink
								linkHref={"mailto:zhuzhaka.dog@gmail.com"}
								linkText={"E-Mail"}
								subText={"ящик для предложений работы мечты"}
								onClick={() => {
								}}
								options={{openInNewTab: false}}
							/>
						</li>
						<li>
							<ResumeLink
								linkHref={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
								linkText={"YouTube"}
								subText={youtubeSubText}
								onClick={() => {
									setYoutubeSubText("очевидно, не стоит верить автору, everbody lies");
								}}
							/>
						</li>
					</ul>
			</div>
  );
}