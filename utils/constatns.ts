import { QeustionType } from 'typings/question';
import { ResultType } from 'typings/result';

// 프로젝트 내에 서 쓰일 문자열들 (질문, 질문 선택지 유형, 유형에 따른 결과 등등..)
export const QUESTIONS: Array<QeustionType> = [
  {
    selectType: 'list',
    title: '한 여름 외출 후 집에 들어온 당신,방 에어컨 설정 온도는 과연 몇 도인가요?',
    selectList: [
      '최대한 강하게! 18도 파워 냉방',
      '은은한 바람이 좋아~ 24도 1단계 바람으로 튼다',
      '절전! 에어컨보다는 선풍기지',
      '아무리 더워도 난 부채로 견딘다',
    ],
  },
  {
    selectType: 'list',
    title: '출출한데 햄버거를 시켜 먹으려는당신, 과연 당신의 선택은?',
    selectList: [
      '근본은 맥도날드지! 베이컨 토마토디럭스로 간다',
      '진짜 먹잘알은 버거킹이지~ 와퍼 세트로 간다',
      '든든한 콩고기로 만든 롯데리아 리아미라클 버거로 간다',
      '햄버거보단 서브웨이 베지다!',
    ],
  },
  {
    selectType: 'list',
    title: '친구와 약속장소에 가려는 당신,걸어서 20분정도 되는 거리라면 당신의 선택은?',
    selectList: [
      '귀찮은 건 딱 질색! 택시를 탄다',
      '항상 타던대로! 버스나 지하철을 탄다',
      '20분이면 걸어갈만 하지! 걸어간다',
    ],
  },
  {
    selectType: 'list',
    title: '일주일 치의 장을 한꺼번에 보고 온 당신, 손에 들고 갈 수가 없을 때 당신의 선택은?',
    selectList: [
      '미리 들고온 천으로 된 장바구니를 꺼낸다',
      '쓰레기 봉투 큰 거 주세요! 새로 봉투를 사서 담아간다',
      '이럴 줄 알고 캐리어 들고 왔지! 캐리어에 담아간다.',
    ],
  },
  {
    selectType: 'list',
    title: '카페에서 커피를 마시려는 당신, 커피를 테이크 아웃 하는 당신의평소 모습은?',
    selectList: [
      '평소 먹던대로 아메리카노를 시키고 플라스틱 용기에 빨대를 받아온다',
      '평소 먹던대로 아메리카노를 시키고 빨대는 필요없으니 받지 않는다',
      '평소 먹던대로 아메리카노를 시키고 텀블러에 받아온다',
    ],
  },
  {
    selectType: 'list',
    title: '집에서 나가려는 당신, 집에서 나갈 때 당신의 루틴은 어떠한가요?',
    selectList: [
      '어차피 또 올거니까 방에 불을 켜놓고 나간다',
      '잠깐 나가더라도 불은 꺼야지! 방에 불을 꺼놓고 나간다',
      '방에 불을 끄고 사용하지 않는 전자 제품의 전원도 꺼놓고 나간다',
    ],
  },
  {
    selectType: 'list',
    title: '배가 너무 고픈데 집에 음식이 하나도 없는 상황! 배달 어플로 음식을 시키려고 할 때 당신의 선택은?',
    selectList: [
      '일회용품은 안돼! 포장용기를 챙겨서 음식을 포장하러 간다',
      '설거지만 하지 뭐~ 일회용품을 받지않고 배달시킨다',
      '나가기도 귀찮고 다 귀찮아~ 일회용품 받기를 선택하고 배달시킨다',
    ],
  },
  {
    selectType: 'ox',
    title: '나는 평소에 비닐을 버릴 때 물로 헹궈 음식물을 제거한 후에 비닐을 버린다.',
  },
  {
    selectType: 'ox',
    title:
      '나는 평소에 비닐을 버릴 때 물로 헹궈 음식물을 제거한 후에 비닐을 버린다.나는 청소를 할 때 걸레와 행주를 사용하기 보다는 휴지나 물티슈를 자주 쓰는 편이다.',
  },
  {
    selectType: 'ox',
    title: '나의 평소 샤워시간은 30분 이내이다.',
  },
  {
    selectType: 'ox',
    title: '나는 분리수거를 할 때, 페트병의 경우는 라벨을 따로 분리하여 버린다.',
  },
  {
    selectType: 'ox',
    title: '나는 평소에 집의 변기 수조에 물병이나 벽돌을 넣어놓는다.',
  },
];

export const RESULT: ResultType = {
  lv1: {
    descripton:
      '당신은 아직 환경보호의 중요성을 깨닫지 못했군요! 금쪽같은 내 새끼지만 어딜 가든 항상 사고만 치는 천진난만 아이 같은 유형입니다. 환경보호에 관심없는 것은 잘못이 아닙니다, 그치만 나와 미래의 나의 자식에게 깨끗한 지구를 물려주는 게 좋겠죠? 어렵게 생각하지 마세요, 환경 보호에 대해 관심을 가지는 것 부터 시작해보세요! 환경 보호를 위해 일상 속 작은 것 부터 하나씩 실천하면 좋을 것들을 알려드릴게요.',
    useLink: false,
    tips: [
      {
        title: '친환경에 대한 키워드들을 하나씩 알아보기',
        tipsDescription:
          '#제로 웨이스트 #비건 #탄소중립 등 우리 주위엔 환경에 관심을 기울이는 사람들이 생각 보다 많이 있답니다.',
      },
      {
        title: '쉬운 것부터 하나씩 실천하기',
        tipsDescription:
          '배달음식 줄이기, 쓰레기 분리배출 등 쉬운 것부터 실천해보아요. 분리수거를 잘하면 소각과 매립의 비율을 줄이고 재활용의 비율을 높일 수 있답니다!',
      },
      {
        title: '대중교통 이용을 생활화 하기',
        tipsDescription:
          ' 걷기> 자전거타기> 대중교통! 승용차 이용일을 일주일에 하루만 줄여도 연간 445Kg의 이산화탄소를 줄일 수 있어요.',
      },
      {
        title: '음식은 먹을만큼만 먹기',
        tipsDescription:
          '연간 버려지는 음식물 쓰레기를 돈으로 환산하면 15조원이 넘는다는 사실 알고계셨나요? 먹을 만큼만 만들고, 남기지 않는 습관 어렵지 않아요!',
      },
    ],
  },
  lv2: {
    descripton:
      '이제 막 환경에 관심을 갖고자 하는 당신! 아직도 늦지 않았다고 말해주고 싶어요.이런 작은 관심 하나가 모여 더 나은 환경을 만들어갈 수 있으니까요. 더욱 더 많은 관심을 가지려고 노력하고 실행에도 옮긴다면 환경어린이에서 환경처돌이가 될 수 있는 무한한 가능성을 가지고 있어요! 항상 많은 관심과 실생활에서의 작은 습관들을 잊지 않았으면 해요.',
    useLink: false,
    tips: [
      {
        title: '일회용품 사용 줄이기',
        tipsDescription:
          '일회용품의 원료가 나무라는 사실! 일회용품으로 인해 숲이 사라지고 있어요. 카페에서는 텀블러를, 장을 볼 때는 장바구니를 들고 다녀요.',
      },
      {
        title: '전자 문서 사용하기',
        tipsDescription:
          '2012년 기준 1년동안 영수증 발행에만 2500억이 사용됐어요. 생산과 폐기과정에서도 온실가스가 5만톤이나 발생했다고 해요. 이제는 종이 영수증 대신 전자 문서 사용을 권장해요.',
      },
      {
        title: '버리지 말고 나누기',
        tipsDescription:
          '안 쓰는 물건은 중고물품으로 판매하거나기부해요. 책은 중고 서점을 이용해서, 헌 옷이나 신발, 냄비와 같은 주방용품들은 헌 옷 방문 수거업체나 고물상 이용을 권장해요.',
      },
    ],
  },
  lv3: {
    descripton:
      '당신은 환경보호에 관심이 많고 환경을 소중히 할 줄 아는 환경 지킴이군요. 일상생활 속에서 환경을 위한 행동들을 실천하려 노력하고 있는 것 같아요. 지금도 좋지만 조금 더 적극적으로 환경을 위해 나서 보면 어떨까요? 남들에게 환경을 위한 행동을 같이 해보자고 권유해보는 것도 좋고, 아직 환경에 관심이 부족한 사람들에게는 왜 관심을 가져야 하는지 알려주는 것도 좋을 것 같아요!',
    useLink: true,
    tips: [
      {
        title: '환경을 위한 캠페인과 봉사활동에 참여해 보면 어떨가요?',
        linkList: [
          {
            linkDescription: '지구의 쓰레기를 담는 활동을 하는 <지구 쓰담 캠페인>에 참여해봐요!',
            linkUrl: '[https://earthplogging.com/](https://earthplogging.com/)',
          },
          {
            linkDescription:
              '국립공원자원봉사에서는 연령대에 따라 다양한 분야의 봉사활동에 참여할 수 있어요. 어떤 프로그램이 있는지 살펴봐요!',
            linkUrl: '(https://volunteer.knps.or.kr/application/programInfo.action)',
          },
        ],
      },
    ],
  },
  lv4: {
    descripton:
      '당신이 바로 진정으로 환경을 위할 줄 아는 환경부장관이군요. 환경을 위해 엄청 힘쓰고 계시군요?! 아주 잘하고 있답니다. 지금처럼만 계속 노력해주세요! 또한 주변 사람들에게도 환경을 지키도록 권해보는 건 어떨까요? 더 많은 사람들의 노력이 더해진다면 지구가 지금보다 더 건강해질거예요.충분히 잘하고 있으니 그 영향력을 다른 사람들에게도 전해준다면 더할나위없이 좋을 것 같아요.',
    useLink: true,
    tips: [
      {
        title: '환경에 관심이 많은 당신께, 흥미로운 다큐 두 편 추천드릴게요.',
        linkList: [
          {
            subTitle:"<카우스피라시>",
            linkDescription: '축산업이 환경 오염의 큰 원인이라고 하는데요. <카우스피라시>를 보고 이에 대해 깊게 생각해보는 시간을 가지면 어떨까요?',
            linkUrl: '[https://www.netflix.com/kr/title/80033772]',
          },
          {
            subTitle:"<비포 더 블러드>",
            linkDescription:
              '현재와 앞으로 더 심각해질 기후 상황에 대해 다룬 다큐멘터리입니다. 기후 문제를 해결하기 위해 더 힘 써보도록 해요!',
            linkUrl: '[https://movie.naver.com/movie/bi/mi/basic.naver?code=154391]',
          },
        ],
      },
    ],
  },
};
