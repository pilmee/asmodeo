import { Observable, Observer } from 'rxjs';

export const waterfallXHR = (xhrList: Observable<any>[], startIndex = 0) => {
  const executeXHR = (index, observer: Observer<any>) => {
    xhrList[index].subscribe(
      () => {
        if (index < xhrList.length - 1) {
          observer.next(true);
          const newIndex = index + 1;
          executeXHR(newIndex, observer);
        } else {
          observer.complete();
        }
      },
      error => observer.error({ error, index })
    );
  };

  return Observable.create((observer: Observer<any>) =>
    executeXHR(startIndex, observer)
  );
};
