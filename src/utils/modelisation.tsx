export class UserInfoModelisation {
  error: string;
  firstName: string;
  score: string;
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;

  constructor(data: any) {
    this.error = data.error || "";
    this.firstName = data.userInfos?.firstName || "";
    this.score = data.score || data.todayScore || "";
    this.calorieCount = data.keyData?.calorieCount || 0;
    this.proteinCount = data.keyData?.proteinCount || 0;
    this.carbohydrateCount = data.keyData?.carbohydrateCount || 0;
    this.lipidCount = data.keyData?.lipidCount || 0;
  }
}

export class UserActivitiesModelisation {
  error: string;
  sessions: Session[];

  constructor(data: any) {
    this.error = data.error || "";
    this.sessions = data.sessions || [];
  }
}

// Supposons une structure pour les sessions
interface Session {
  day: string;
  kilogram: number;
  calories: number;
}

export class UserAverageSessionModelisation {
  error: string;
  sessions: AverageSession[];

  constructor(data: any) {
    this.error = data.error || "";
    this.sessions = data.sessions || [];
  }
}

// Supposons une structure pour les sessions moyennes
interface AverageSession {
  day: number;
  sessionLength: number;
}

export class UserPerformanceModelisation {
  error: string;
  kind: string;
  data: PerformanceData;

  constructor(data: any) {
    this.error = data.error || "";
    this.kind = data.kind || "";
    this.data = data.data || { value: 0, kind: 0 };
  }
}

// Supposons une structure pour les données de performance
interface PerformanceData {
  value: number;
  kind: number;
}
