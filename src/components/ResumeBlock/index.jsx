import './ResumeBlock.scss'

export const ResumeBlock = ({resumeData}) => {
  return (
    <div className="resume-block">
				<h1>{resumeData.title}</h1>
				<div className="resume-block__text">
					<p>{resumeData.body.greetings}</p>
					<p>{resumeData.body.realme}<b>{resumeData.body.fakeme}</b>.</p>
					<p dangerouslySetInnerHTML={{__html: resumeData.body.rofl}}></p>					
				</div>
				<div className="resume-block__links">
						<a href="https://github.com/zhuzhaka" target="_blank" rel="noreferrer">GitHub</a>
						<a href="https://www.behance.net/zhuzhaka" target="_blank" rel="noreferrer">Behance</a>
						<a href="mailto:zhuzhaka.dog@gmail.com">E-Mail</a>
						<a href="mailto:zhuzhaka.dog@gmail.com">E-Mail</a>
						<a href="mailto:zhuzhaka.dog@gmail.com">E-Mail</a>
						<a href="mailto:zhuzhaka.dog@gmail.com">E-Mail</a>
						<a href="mailto:zhuzhaka.dog@gmail.com">E-Mail</a>
						<a href="mailto:zhuzhaka.dog@gmail.com">E-Mail</a>
						<a href="mailto:zhuzhaka.dog@gmail.com">E-Mail</a>
						<a href="mailto:zhuzhaka.dog@gmail.com">E-Mail</a>
				</div>
			</div>
  );
}