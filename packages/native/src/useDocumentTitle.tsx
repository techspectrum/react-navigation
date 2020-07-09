import * as React from 'react';
import type { NavigationContainerRef } from '@react-navigation/core';

/**
 * Set the document title for the active screen
 */
export default function useDocumentTitle(
  ref: React.RefObject<NavigationContainerRef>
) {
  React.useEffect(() => {
    const navigation = ref.current;

    const title =
      // @ts-ignore
      navigation?.getCurrentOptions()?.title ??
      navigation?.getCurrentRoute()?.name;

    if (title != null) {
      document.title = title;
    }

    return navigation?.addListener('options', (e) => {
      const title =
        // @ts-ignore
        e.data.options?.title ?? navigation?.getCurrentRoute()?.name;

      document.title = title;
    });
  });
}
