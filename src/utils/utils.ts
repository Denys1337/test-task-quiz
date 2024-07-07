 export const determineLanguageFromAnswer = (answer: string): string => {
    switch (answer.toLowerCase()) {
      case 'english':
        return 'en';
      case 'spanish':
        return 'es';
      case 'french':
        return 'fr';
      case 'german':
        return 'de';
      default:
        return 'en';
    }
  };