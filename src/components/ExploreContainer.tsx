import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import { useEffectOnce } from '../hooks/useEffectOnce';
import { getBugs, IBugsResponse } from '../services/commonService';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [bugsResponse, setBugsResponse] = useState<IBugsResponse>({
    bugs: [],
    pageNumber: 1,
    pageSize: 10,
  });

  useEffectOnce(() => {
    setBugsResponse(getBugs(bugsResponse.pageNumber, bugsResponse.pageSize));
  });

  const handleClickMode = () => {
    const newBugs = getBugs(bugsResponse.pageNumber + 1, bugsResponse.pageSize);
    setBugsResponse({
      bugs: [...bugsResponse.bugs, ...newBugs.bugs],
      pageNumber: newBugs.pageNumber,
      pageSize: newBugs.pageSize,
    });

    console.log(bugsResponse);
  };

  return (
    <React.Fragment>
      <div>
        {bugsResponse.bugs.map((bug) => {
          return (
            <IonCard key={bug.id}>
              <IonCardHeader>
                <IonCardTitle>{bug.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div>ID: {bug.id}</div>
                <div>Resolved: {bug.isResolved ? 'Yes' : 'No'}</div>
              </IonCardContent>
            </IonCard>
          );
        })}
      </div>
      <div className="more">
        <IonButton onClick={handleClickMode}>More...</IonButton>
      </div>
    </React.Fragment>
  );
};

export default React.memo(ExploreContainer);
