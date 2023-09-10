import { useContext } from 'react';
import { LanguageContext } from '../../context';

import { Logo } from '../../components/Logo'
import { InfoList } from '../../components/InfoList';
import { ResumeBlock } from '../../components/ResumeBlock';
import { LanguageSwitch } from '../../components/LanguageSwitch'

import "./MainPage.scss"

export const MainPage = () => {
	const { localization } = useContext(LanguageContext);
	const authorStackData = localization.localizedTexts.author_stack;
	const hrOptionsData = localization.localizedTexts.hr_options;
	const resumeData = localization.localizedTexts.resume;
	
  return (
    <main className="main-page">
			<div className="main-page__wrapper main-page_additional">		
				<div className="main-page__content">
					<div className="main-page__logo">
						<h3>Provided by</h3>
						<Logo />
					</div>
					<div className='main-page__infolist'>
						<InfoList list={authorStackData.list} title={authorStackData.title}/>
						<InfoList list={hrOptionsData.list} title={hrOptionsData.title}/>		
					</div>
				</div>
			</div>
			<div className="main-page__wrapper main-page_resume slide-left">
				<LanguageSwitch />
				<div className="main-page__content">		
					<ResumeBlock resumeData={resumeData}/>
				</div>
			</div>
    </main>
  );
}