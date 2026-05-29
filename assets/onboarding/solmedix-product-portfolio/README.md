# Solmedix Product Atlas

솔메딕스 제품군을 상반신 인체 맵에서 간결하게 훑고, 제품 위치를 클릭하면 상세 이미지와 설명을 확인할 수 있게 만든 홈페이지용 인터랙티브 프로토타입입니다.

## 실행

```powershell
python -m http.server 5177 --bind 127.0.0.1
```

브라우저에서 `http://127.0.0.1:5177`로 확인할 수 있습니다.

## 포함한 제품

- Fixway: Endotracheal Tube Holder
- Lightin: Light Guided Injection System
- Lightin Portable: Portable Light Guided Injection System
- Accumetry: Universal Probe Solutions
- Hemoclose: Hemostatic Valve
- Quratus: Suture Anchor System
- Quratus Cannula: Suture Anchor System Access
- Quratus Instrument: Punch / Tap & Awl

## 홈페이지 이식 메모

- 현재는 정적 파일 `index.html`, `styles.css`, `app.js`로 구성되어 있습니다.
- 인체 베이스는 `assets/human-medical-bodysuit-upper.png`를 Three.js 평면 텍스처로 배치하고, 화면 위에는 제품 위치 핫스팟만 단순하게 표시합니다.
- 제품 이미지는 `assets/product-photos/`에 배치되어 있으며, 공식 Solmedix 제품 페이지에서 확인 가능한 이미지를 프로토타입용으로 임시 반영했습니다.
- Lightin Portable은 사용자가 공유한 YouTube 홍보영상(`https://www.youtube.com/watch?v=KTCUSoH5Nic`)의 장면을 참고해 휴대형 광원, needle tip 가시광, 성대 내 위치 확인 흐름을 반영했습니다.
- 실제 홈페이지에 넣을 때는 `stage` 영역과 우측 상세 패널을 섹션 컴포넌트로 분리하고, 제품 문구와 이미지/브로슈어 링크는 CMS 또는 JSON 데이터로 관리하면 됩니다.
- 최종 공개 전에는 회사 보유 원본 제품 사진, 투명 배경 PNG, 또는 CAD/3D 모델로 교체하는 것이 가장 좋습니다.
- 최종 상용 반영 시에는 생성형 이미지 대신 회사가 사용권을 확보한 모델 이미지나 라이선스가 명확한 glTF/FBX 인체 모델로 교체하는 것을 권장합니다.
- 의료기기 화면이므로 최종 공개 전 제품별 IFU, 인허가 문구, 금기/주의사항, 광고 심의 문구를 법무/RA 기준으로 검수해야 합니다.

## 참고 자료

- https://www.solmedix.com/products
- https://www.solmedix.com/lightin
- https://www.solmedix.com/quratus
- https://www.solmedix.com/hemoclose
- https://www.youtube.com/watch?v=KTCUSoH5Nic
