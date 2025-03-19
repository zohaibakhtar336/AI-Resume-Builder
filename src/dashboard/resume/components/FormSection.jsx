import React, { useState } from 'react';
import PersonalDetail from './forms/PersonalDetail';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';
import Summary from './forms/Summary';

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid /> Theme
        </Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && (
            <Button size="sm" className="flex gap-2" onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
              <ArrowLeft /> Back
            </Button>
          )}
          <Button className="flex gap-2" size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}>
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Detail  */}
      {activeFormIndex == 1 ?
        <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
        : activeFormIndex == 2 ?
          <Summary enabledNext={(v) => setEnableNext(v)} />
          : null
      }
    </div>
  )
}

export default FormSection