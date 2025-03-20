import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

const formField = {
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummery: '',
};

function Experience() {
  const [experienceList, setExperienceList] = useState([]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (resumeInfo?.Experience?.length > 0) {
      setExperienceList(resumeInfo.Experience);
    }
  }, [resumeInfo]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setExperienceList((prev) => {
      const updatedList = [...prev];
      updatedList[index][name] = value;
      return updatedList;
    });
  };

  const addNewExperience = () => {
    setExperienceList((prev) => [...prev, { ...formField }]);
  };

  const removeExperience = () => {
    setExperienceList((prev) => prev.slice(0, -1));
  };

  const handleRichTextEditor = (e, name, index) => {
    setExperienceList((prev) => {
      const updatedList = [...prev];
      updatedList[index][name] = e.target.value;
      return updatedList;
    });
  };

  useEffect(() => {
    setResumeInfo((prev) => ({ ...prev, Experience: experienceList }));
  }, [experienceList, setResumeInfo]);

  const onSave = async () => {
    setLoading(true);
    const data = {
      data: {
        Experience: experienceList.map(({ id, ...rest }) => rest),
      },
    };

    try {
      await GlobalApi.UpdateResumeDetail(params?.resumeId, data);
      toast.success('Details updated!');
    } catch (error) {
      toast.error('Failed to update details!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                <div>
                  <label className='text-xs'>Position Title</label>
                  <Input name="title" onChange={(e) => handleChange(index, e)} defaultValue={item?.title} />
                </div>
                <div>
                  <label className='text-xs'>Company Name</label>
                  <Input name="companyName" onChange={(e) => handleChange(index, e)} defaultValue={item?.companyName} />
                </div>
                <div>
                  <label className='text-xs'>City</label>
                  <Input name="city" onChange={(e) => handleChange(index, e)} defaultValue={item?.city} />
                </div>
                <div>
                  <label className='text-xs'>State</label>
                  <Input name="state" onChange={(e) => handleChange(index, e)} defaultValue={item?.state} />
                </div>
                <div>
                  <label className='text-xs'>Start Date</label>
                  <Input type="date" name="startDate" onChange={(e) => handleChange(index, e)} defaultValue={item?.startDate} />
                </div>
                <div>
                  <label className='text-xs'>End Date</label>
                  <Input type="date" name="endDate" onChange={(e) => handleChange(index, e)} defaultValue={item?.endDate} />
                </div>
                <div className='col-span-2'>
                  <RichTextEditor
                    index={index}
                    defaultValue={item?.workSummery}
                    onRichTextEditorChange={(e) => handleRichTextEditor(e, 'workSummery', index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Button variant="outline" onClick={addNewExperience} className="text-primary">+ Add More Experience</Button>
            <Button variant="outline" onClick={removeExperience} className="text-primary">- Remove</Button>
          </div>
          <Button disabled={loading} onClick={onSave}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
