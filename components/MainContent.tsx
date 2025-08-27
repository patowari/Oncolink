import React from 'react';
import { ChevronRightIcon } from './Icons';

interface ArticleProps {
  category: string;
  title: string;
  summary: string;
  date: string;
  authors: string;
  imageUrl?: string;
  layout?: 'imageRight' | 'imageLeft';
}

const ArticleCard: React.FC<ArticleProps> = ({ category, title, summary, date, authors, imageUrl, layout = 'imageRight' }) => {
  const isImageLeft = layout === 'imageLeft';

  return (
    <div className="bg-gray-50 p-8 md:p-12">
      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}>
        <div className={`order-2 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
          <div className="flex justify-between items-center mb-2">
            <p className="text-blue-600 font-semibold text-xs tracking-wider uppercase">{category}</p>
            <a href="#" className="text-sm font-semibold text-gray-800 hover:text-blue-600 flex items-center transition-colors">
              Read more <ChevronRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{title}</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">{summary}</p>
          <p className="mt-6 text-sm text-gray-500">{date}</p>
          <p className="mt-1 text-sm text-gray-500">{authors}</p>
        </div>
        <div className={`order-1 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
          <img src={imageUrl} alt={title} className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

interface FeaturedArticleProps {
    title: string;
    summary: string;
    imageUrl: string;
}

const FeaturedArticleCard: React.FC<FeaturedArticleProps> = ({ title, summary, imageUrl }) => (
  <a href="#" className="group flex flex-col sm:flex-row gap-4 items-start">
    <div className="flex-shrink-0">
        <img src={imageUrl} alt={title} className="w-full sm:w-40 h-auto object-cover rounded-md shadow-md group-hover:shadow-lg transition-shadow" />
    </div>
    <div>
      <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{summary}</p>
      <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 flex items-center mt-3 transition-colors">
        Read more <ChevronRightIcon className="w-4 h-4 ml-1" />
      </div>
    </div>
  </a>
);


const SectionHeader: React.FC<{ title: string; showViewAll?: boolean }> = ({ title, showViewAll = false }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase">{title}</h2>
    {showViewAll && (
      <a href="#" className="text-sm font-semibold text-gray-800 hover:text-blue-600 flex items-center transition-colors">
        View all <ChevronRightIcon className="w-4 h-4 ml-1" />
      </a>
    )}
  </div>
);

const LinkCard: React.FC<{ title: string; date?: string }> = ({ title, date }) => (
    <a href="#" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors group">
        <div className="flex justify-between items-start h-full">
            <div className="flex flex-col">
                <p className="font-semibold text-gray-800 group-hover:text-blue-700">{title}</p>
                {date && <p className="text-sm text-gray-500 mt-1">{date}</p>}
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0 ml-2" />
        </div>
    </a>
);

const MainContent: React.FC = () => {
  return (
    <div className="bg-white py-12">
        <div className="space-y-12">
            <section>
                <ArticleCard 
                    category="PRACTICE-CHANGING SCIENCE"
                    title="Prediction of Effectiveness and Toxicities of Immune Checkpoint Inhibitors Using Real-World Patient Data"
                    summary="Immune checkpoint inhibitors have improved outcomes in certain patients with cancer, they can also cause life-threatening immunotoxicities. We aimed to build a machine learning framework using EHR data to predict hepatitis, colitis, pneumonitis and 1-year overall survival."
                    date="April 1, 2024"
                    authors="Levente Lippenszky, MS, et al."
                    imageUrl="https://uploads.onecompiler.io/42uvjq4qp/43uxmdjfx/331d03196851ef5c1449f0b5be03d89e05d7eff7.jpg"
                    layout="imageRight"
                />
            </section>

            <section>
                <ArticleCard 
                    category="WEBINAR RESOURCES"
                    title="Balancing the Benefits and Harms of ctDNA Surveillance in Early-Stage Breast Cancer"
                    summary="ctDNA tests could identify patients with early-stage breast cancer who will experience recurrence. However, there is no evidence that ctDNA monitoring does or does not improve survival, therefore clinical guidelines do not recommend testing."
                    date="April 3, 2024"
                    authors="Lajos Pusztai, MD, DPhil, FASCO, and Mariya Rozenblit, MD, ASCO Daily News"
                    imageUrl="https://uploads.onecompiler.io/42uvjq4qp/43uxmdjfx/b3705057bee0c1203a4705fd3a8286a7905b5fec.png"
                    layout="imageLeft"
                />
            </section>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
            <section>
                <SectionHeader title="FEATURED" />
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                    <FeaturedArticleCard
                        title="Cancer Drug Shortages: Impossible Choices"
                        summary="Nearly 500 oncology doctors and providers joined together and signed a letter urging lawmakers to end drug shortages. Add your voice. Patients cannot wait."
                        imageUrl="https://uploads.onecompiler.io/42uvjq4qp/43uxmdjfx/52efaf4a308ea40d2f3436aed4cc0c8b88ba1e43.png"
                    />
                    <FeaturedArticleCard
                        title="Preceptorship on Uterine Cancer 2024: Lugano"
                        summary="Join us August 8-10 in Yokohama, Japan. BOATS Breakthrough transcends disciplines and borders to shine a light on novel, cutting-edge advances that transform cancer care. Register by June 26 for the best rates!"
                        imageUrl="https://uploads.onecompiler.io/42uvjq4qp/43uxmdjfx/30e043ed05e00d5e5ae59d48d0a81f044297b21d.png"
                    />
                </div>
            </section>
            
            <section>
                <SectionHeader title="TOP NEWS" showViewAll={true} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <LinkCard title="A Deep-Learning Model Predicts the Primary System Origin of Malignant..." date="Thursday, April 25, 2024" />
                    <LinkCard title="FDA Approves Alectinib as Adjuvant Treatment" date="Wednesday, April 24, 2024" />
                    <LinkCard title="New Cancer Research Impacting Treatment, Prevention, Early Diagnosis, and Quality of Life to be Presented at..." date="Wednesday, April 24, 2024" />
                </div>
            </section>

            <section>
                <SectionHeader title="GUIDELINES" showViewAll={true} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <LinkCard title="Guidelines, Tools, & Resources" />
                    <LinkCard title="Breast Cancer" />
                    <LinkCard title="Supportive Care and Treatment Related Issues" />
                </div>
            </section>
        </div>
    </div>
  );
};

export default MainContent;
