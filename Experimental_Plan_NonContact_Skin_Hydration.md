# Non-Contact Skin Hydration Measurement Using Eddy-Current Inductive Sensing
## Experimental Design for Academic Publication

**주관기관:** [소속 기관명]  
**연구책임자:** [연구자명]  
**작성일:** 2026년 2월  
**목표 저널:** Sensors and Actuators B: Chemical / Biosensors and Bioelectronics / Skin Research and Technology

---

## 1. 연구 배경 및 목적 (Introduction & Objective)

### 1.1 연구 배경

인체 피부는 각질층(stratum corneum, SC, 10–20 μm), 표피층(epidermis, ~100 μm), 진피층(dermis, ~2 mm) 등의 층상 구조로 이루어져 있다. 각질층의 수분 함량(skin hydration)은 피부 장벽 기능(skin barrier function)의 핵심 지표이며, 화장품 임상 평가 및 피부과 진단에서 중요하게 활용된다.

현재 피부 수분 측정의 표준 장비인 Corneometer® (CM 825, Courage+Khazaka Electronic GmbH, Germany)는 정전용량(capacitance) 방식의 접촉식 측정기로로, 전 세계 연구에서 황금 표준(gold standard)으로 사용되고 있다. 그러나 접촉식 측정은 다음의 근본적 한계를 지닌다:

1. **압력 의존적 오차(Pressure artifact):** 프로브 접촉 압력에 따라 각질층 국소 수분 재분포가 발생하여 측정값에 계통 오차가 유발된다.
2. **위생 문제(Hygiene concern):** 다수의 피험자를 연속 측정할 경우 피부 마이크로바이옴 교차 오염 위험이 존재한다.
3. **실시간 연속 모니터링 불가:** 프로브의 물리적 접촉이 필요하므로 연속적인 동적 측정이 불가능하다.

### 1.2 연구 목적

본 연구는 **맴돌이전류(Eddy Current)의 피부 효과(Skin Effect)**를 활용하여, 피부와 센서 간 완전한 비접촉 상태에서 각질층 수분 함량을 정량적으로 측정하는 새로운 방법론을 개발하고 검증하는 것을 목적으로 한다.

**주요 가설:** 100 MHz 대역 고주파 자기장을 피부 표면에 인가할 경우, Eddy Current의 침투 깊이(skin depth, δ)가 각질층 두께(~15 μm)에 국한되며, 각질층 수분 함량 변화가 이 주파수에서의 유도 임피던스 변화로 측정 가능하다.

**핵심 검증 지표:**
- 비접촉 센서 측정값과 Corneometer 기준값 간 **결정계수 R² > 0.85** 이상
- 반복 측정 재현성: **CV(변동계수) < 5%**
- 측정 거리 범위: **1–5 mm** 비접촉 조건

---

## 2. 이론적 배경 (Theoretical Framework)

### 2.1 Eddy Current와 피부 효과 (Skin Effect)

고주파(f) 교류 자기장에 의해 도전성 매질에 유도되는 Eddy Current의 침투 깊이(skin depth)는 다음 식으로 정의된다:

```
δ = √(ρ / (π × f × μ))
```

여기서:
- δ: skin depth [m]
- ρ: 매질의 전기 비저항 [Ω·m]
- f: 여기 주파수 [Hz]
- μ: 매질의 투자율 (피부≈μ₀ = 4π×10⁻⁷ H/m)

피부 각질층의 전기 비저항(ρ_SC)은 수분 함량에 따라 크게 달라진다:
- 건성 각질층: ρ_SC ≈ 10⁶ Ω·m (매우 높음)
- 정상 수분 각질층: ρ_SC ≈ 10³–10⁴ Ω·m (수분 증가 시 저항 감소)

**100 MHz에서의 skin depth 계산:**

| 각질층 수분 상태 | ρ (Ω·m) | δ (μm) | 의미 |
|:---:|:---:|:---:|:---:|
| 건성 (aw < 0.4) | 1×10⁶ | ~3,180 | 각질층 관통 |
| 정상 (aw ≈ 0.6) | 5×10³ | ~225 | 각질층 내부 |
| 수분 충분 (aw > 0.8) | 1×10² | ~10–15 | 각질층 표면 국한 |

수분 함량이 증가할수록 skin depth가 감소하고, 이로 인해 코일의 유도 임피던스(inductive impedance)가 변화하는 원리를 활용한다.

### 2.2 코일 임피던스 모델

센서 코일의 복소 임피던스는 다음과 같이 표현된다:

```
Z_coil = R_coil + jωL_coil + Z_eddy(σ_SC, d, f)
```

여기서 Z_eddy는 피부로 유도된 Eddy Current에 의한 반사 임피던스이며, 피부 전도율(σ_SC), 리프트오프 거리(d), 주파수(f)의 함수이다.

**복수 주파수 차분법(Differential Multi-frequency Method):**

각질층(SC) 순수 기여 신호를 추출하기 위해 두 가지 주파수를 동시에 측정한다:

```
ΔZ_SC = Z(100 MHz) - α × Z(1 MHz)
```

여기서 α는 보정 계수로, 1 MHz에서는 Eddy Current가 진피층까지 침투하므로 진피 성분을 제거하는 역할을 한다.

---

## 3. 실험 설계 (Experimental Design)

### 3.1 실험 개요

본 연구는 세 단계의 계층적 실험으로 구성된다:

| 단계 | 명칭 | 목적 | 피험자 수 |
|:---:|:---:|:---:|:---:|
| Phase I | In-Vitro 예비 실험 | 센서 감도 및 calibration curve 확립 | N/A |
| Phase II | In-Vivo 파일럿 실험 | 개념 증명 (PoC) 및 측정 변수 최적화 | n = 10 |
| Phase III | 임상 검증 실험 | Corneometer 상관관계 검증 및 화장품 효능 평가 | n = 30 |

---

### 3.2 Phase I: In-Vitro 예비 실험

#### 3.2.1 목적
실제 피부 측정 전, 제어된 환경에서 센서의 기초 응답 특성을 확립하고 측정 프로토콜을 검증한다.

#### 3.2.2 실험 재료 및 방법

**[실험 A] 전도율-주파수 응답 기초 실험**

| 항목 | 내용 |
|:---:|:---|
| 목적 | 전도율이 다른 매질에서의 주파수 이동(frequency shift) 측정 |
| 재료 | 증류수, 0.9% NaCl 생리식염수, 0.1% NaCl, PEG-400(보습제 모사), 건조 셀룰로오스 막, 알루미늄 호일 |
| 방법 | 각 매질을 측정 챔버에 고정, 센서-매질 간격 1, 2, 3, 5 mm로 변화하면서 주파수 측정 |
| 반복수 | 각 조건당 n = 10회 |
| 측정값 | 발진 주파수 f, 전압 진폭, 위상 |

**[실험 B] 수분 모사 팬텀(Hydration Phantom) 실험**

피부 각질층을 모사한 팬텀을 사용한다:
- **팬텀 재료:** Polyacrylamide gel (PAA gel)에 NaCl 농도를 달리하여 전도율 조절
- **수분 함량 범위:** 전도율 0.01 ~ 1.0 S/m로 단계별 설정 (피부 전도율 범위 커버)
- **측정:** 각 전도율별 주파수 응답 측정 → **Calibration Curve** 수립

**Calibration Curve 형식:**
```
σ_effective = f(Δf_normalized, d)
Moisture% = g(σ_effective) [선형 회귀 또는 다항 회귀]
```

#### 3.2.3 기대 결과
- 전도율 증가에 따른 주파수 감소(negative frequency shift) 확인
- 리프트오프 거리에 따른 신호 감쇠 특성 곡선 (lift-off correction curve)

---

### 3.3 Phase II: In-Vivo 파일럿 실험 (n = 10)

#### 3.3.1 피험자 선정 기준

- **포함 기준(Inclusion criteria):**
  - 성인 (만 19–45세)
  - 건강한 피부 보유자 (의사 확인)
  - 실험 동의서 서명 완료

- **제외 기준(Exclusion criteria):**
  - 피부 질환 보유자 (아토피, 건선, 습진 등)
  - 12시간 이내 측정 부위 화장품 사용자
  - 임산부, 수유부
  - 이식형 전자기기(심박기 등) 보유자

#### 3.3.2 측정 부위 및 환경 조건

**측정 부위 (ROI: Region of Interest):**
- 우측 전완부 내측 (volar forearm) — 주 측정 부위 (고표준화 가능)
- 뺨(cheek) — 화장품 실용 측정 부위 참고
- 이마(forehead) — 유분/수분 혼합 부위 (비교군)

**환경 조건 (표준화 필수):**

| 환경 변수 | 조건 | 허용 범위 |
|:---:|:---:|:---:|
| 실내 온도 | 20–22 °C | ±1 °C |
| 상대 습도 | 45–55% RH | ±5% RH |
| 순응 시간(Acclimatization) | 측정 30분 전 실내 정주 | 필수 |
| 측정 시각 | 오전 9–11시 (일주기 변동 최소화) | 고정 |

#### 3.3.3 측정 프로토콜

**기저 측정 (Baseline Measurement):**
1. 피험자 입실 → 30분 순응
2. 측정 부위 세척 (중성 비누, 증류수 세척, 10분 건조)
3. 비접촉 센서 측정: 리프트오프 2 mm, 100 MHz / 1 MHz 동시 측정, 3회 반복
4. Corneometer 측정: 동일 부위, 5회 측정 후 평균값 기록
5. 환경 변수 (피부 온도, 주변 온도/습도) 동시 기록

**화장품 도포 후 측정 (Post-application Measurement):**
1. L1: 기저 측정 완료 (T=0)
2. 보습제 0.1 g 도포 → 천천히 도포, 1분 마찰
3. L2: T+1분 측정
4. L3: T+5분 측정
5. L4: T+10분 측정
6. L5: T+30분 측정
7. 각 시점마다 비접촉 센서 + Corneometer 동시 측정

#### 3.3.4 Phase II 기대 결과
- 센서 신호와 Corneometer 값 간 초기 상관관계 분석 (예비 R²)
- 최적 측정 주파수, 리프트오프 거리 결정
- 온도·거리 보정 알고리즘 파라미터 도출

---

### 3.4 Phase III: 임상 검증 실험 (n = 30)

#### 3.4.1 샘플 크기 계산 (Sample Size Calculation)

Pearson 상관계수 r = 0.9 (귀무가설 r₀ = 0.5 대비), α = 0.05, power = 0.80, 단측 검정:

Fisher's z-transform 기반:
```
n = [(z_α + z_β) / (0.5 × ln((1+r)/(1-r)) - 0.5 × ln((1+r₀)/(1-r₀)))]² + 3
   ≈ 23
```

탈락률 30% 고려 → **n = 30명** 확보 목표

#### 3.4.2 그룹 설계

피부 타입별 층화 샘플링(Stratified Sampling):

| 그룹 | 피부 타입 | 인원 | 선정 기준 |
|:---:|:---:|:---:|:---:|
| G1 | 건성 (Dry) | 10명 | Corneometer < 30 AU |
| G2 | 정상 (Normal) | 10명 | Corneometer 30–50 AU |
| G3 | 지성/높은수분 (Oily/High) | 10명 | Corneometer > 50 AU |

#### 3.4.3 실험 프로토콜 (확장판)

**Visit 1 (D1): 기저 측정 + 센서 검증**
- Phase II와 동일한 기저 측정 프로토콜 수행
- 3종 화장품 무작위 배정 (A: 기초 보습제, B: 고농도 히알루론산, C: 세라마이드 크림)
- 우측 전완부 3개 구획으로 나누어 3종 각각 도포

**Visit 2 (D8): 1주일 후 재측정**
- 동일 프로토콜 반복 → 개인 내 재현성(intra-individual reproducibility) 검증

**Visit 3 (D15): 2주일 후 최종 측정**
- 최종 기저 측정 → 장기 재현성 검증

#### 3.4.4 화장품 효능 평가 (On-top Study)

화장품 도포 후 **수분 감쇠 곡선(Moisture Decay Curve)** 측정:

| 시점 | 측정 내용 |
|:---:|:---|
| T0 | 도포 전 기저값 |
| T+1 min | 즉각 흡수 반응 |
| T+5 min | 초기 흡수 완료 |
| T+10 min | 중기 보습 유지 |
| T+30 min | 장기 보습 평가 |
| T+60 min | 완전 흡수 후 잔류 수분 |

**수분 감쇠 곡선 모델 피팅:**
```
M(t) = M_peak × e^(-k × t) + M_baseline
```
- M_peak: 도포 직후 최대 수분 증가량
- k: 감쇠 상수 (화장품 흡수 속도 지표)
- M_baseline: 베이스라인 수분량

---

## 4. 측정 시스템 구성 (Measurement System)

### 4.1 하드웨어 구성

```
[센서 프로브]
 ├── 고주파 평면 스파이럴 코일 (Planar Spiral Coil)
 │   ├── 외경: 8–15 mm
 │   ├── 권선수: 10–20 turns
 │   ├── 선경: 0.1–0.3 mm 에나멜 동선
 │   └── 기판: Rogers RO4350B (RF 특성 우수)
 ├── LC 발진기 회로
 │   ├── [PoC 단계] 74HC14 Schmitt Trigger 기반
 │   └── [고도화] Si5351 PLL Clock Generator IC (주파수 해상도: 0.01 Hz)
 ├── 주파수 측정
 │   ├── [PoC] Arduino Nano + FreqCounter 라이브러리
 │   └── [고도화] NanoVNA-H4 또는 Red Pitaya STEMlab (VNA 기반)
 └── 리프트오프 보정
     ├── [PoC] HC-SR04 초음파 거리센서 (정밀도: ±3 mm)
     └── [고도화] VL53L0X ToF 센서 (정밀도: ±1 mm)

[환경 센서]
 ├── MLX90614 비접촉 적외선 피부 온도 센서 (±0.5°C)
 ├── DHT22 온습도 센서 (±0.5°C, ±2% RH)
 └── 측정 거리: 1–5 mm 비접촉

[데이터 수집]
 ├── Arduino → USB Serial → Python 데이터 로깅
 ├── CSV 실시간 저장 + matplotlib 시각화
 └── 샘플링 레이트: 최대 10 Hz
```

### 4.2 소프트웨어 보정 파이프라인

```python
# 보정 알고리즘 구조
def correct_measurement(f_raw, d, T_skin, RH_env):
    """
    비접촉 피부 수분 측정 보정 알고리즘
    
    Parameters:
    -----------
    f_raw : float - 원시 발진 주파수 (Hz)
    d     : float - 리프트오프 거리 (mm)
    T_skin: float - 피부 표면 온도 (°C)
    RH_env: float - 환경 상대 습도 (%)
    
    Returns:
    --------
    moisture_percent: float - 추정 피부 수분 함량 (%)
    """
    
    # Step 1: 기준 주파수 정규화
    f_normalized = (f_raw - f_air) / f_air * 1e6  # [ppm]
    
    # Step 2: 리프트오프 보정 (지수 감쇠 모델)
    C_d = calibration_curve(d)  # In-vitro에서 도출된 보정 함수
    f_corrected_d = f_normalized / C_d
    
    # Step 3: 온도 보정
    T_ref = 20.0  # 기준 온도 [°C]
    beta = 0.02  # 온도 계수 [/°C]
    f_corrected_T = f_corrected_d / (1 + beta * (T_skin - T_ref))
    
    # Step 4: 환경 습도 보정
    f_corrected_RH = f_corrected_T - gamma * (RH_env - 50.0)
    
    # Step 5: Calibration Curve → Moisture%
    moisture_percent = calibration_model.predict([[f_corrected_RH]])
    
    return moisture_percent
```

---

## 5. 데이터 분석 방법 (Statistical Analysis)

### 5.1 상관관계 분석

- **Pearson Correlation Coefficient (r):** 비접촉 센서 vs. Corneometer
- **결정계수 (R²):** 선형 회귀 모델 적합도
- **Bland-Altman Plot:** 두 측정 방법 간 일치도(agreement) 시각화
- **95% Limits of Agreement (LoA):** 임상적 허용 범위 설정

### 5.2 재현성 분석

```
측정 내 재현성 (Intra-session):
- 동일 방문, 동일 부위, 3회 반복 측정 → CV = (SD/Mean) × 100

측정 간 재현성 (Inter-session):
- Visit 1 vs. Visit 2 (1주일 간격) → ICC (Intraclass Correlation Coefficient)
- ICC > 0.8: 우수한 재현성
```

### 5.3 그룹 간 비교

- One-way ANOVA: 피부 타입(G1, G2, G3) 간 센서 반응 차이
- Post-hoc: Tukey's HSD test
- 유의 수준: α = 0.05

### 5.4 화장품 효능 비교

- Repeated measures ANOVA: 시점(T0, T+1, T+5, T+10, T+30, T+60)에 따른 수분 변화
- 감쇠 상수(k) 비교: 3종 화장품 간 보습 지속성 정량 비교

### 5.5 AI 분류 모델 (선택적 분석)

- **입력 피처:** [f_corrected, T_skin, d, RH, time_series_features]
- **출력:** 피부 타입 분류 (건성/지성/복합성)
- **모델:** Random Forest Classifier, SVM
- **검증:** Leave-One-Out Cross-Validation (LOOCV), Confusion Matrix

---

## 6. 예상 결과 및 논문 구성 (Expected Results & Paper Structure)

### 6.1 예상 핵심 결과

| 검증 지표 | 목표값 | 근거 |
|:---:|:---:|:---:|
| Pearson r (sensor vs. Corneometer) | ≥ 0.90 | 선행 연구 PoC 결과 기반 |
| R² | ≥ 0.81 | r ≥ 0.90 시 달성 가능 |
| 반복 측정 CV | < 5% | 임상 피부 측정 기준 |
| Bland-Altman LoA | ± 8 AU | Corneometer 측정 단위 |
| 측정 시간 | < 5초/측정 | 임상 실용성 기준 |
| ICC (inter-session) | > 0.80 | 우수한 재현성 기준 |

### 6.2 논문 구성안

```
제목: "Non-Contact Skin Hydration Measurement Based on High-Frequency Eddy 
       Current Inductive Sensing with Multi-Variable Correction Algorithm"

Section 1: Introduction
 - 피부 수분 측정의 임상적 중요성
 - 기존 접촉식 측정의 한계
 - 연구 목적 및 기여점

Section 2: Theory and Sensor Design
 - Eddy Current Skin Effect 이론 (식 유도)
 - 침투 깊이와 각질층 수분 관계
 - 평면 코일 임피던스 모델

Section 3: Materials and Methods
 - 센서 시스템 하드웨어 구성
 - In-Vitro Calibration 방법
 - 임상 실험 설계 (피험자, 프로토콜)
 - 다변수 보정 알고리즘

Section 4: Results
 - In-Vitro: Calibration Curve (R²)
 - In-Vivo Phase II: PoC 상관관계 분석
 - In-Vivo Phase III: Bland-Altman, ICC
 - 화장품 효능 Decay Curve 비교
 - AI 피부 분류 정확도 (선택)

Section 5: Discussion
 - Corneometer와의 임상적 동등성 논의
 - 리프트오프 보정의 효과성
 - 현재 한계 및 개선 방향

Section 6: Conclusion
 - 비접촉 측정의 실현 가능성 확인
 - 향후 연구 방향 (임상 확대, 상용화)

Supplementary Materials
 - 회로도, Arduino 코드, 보정 알고리즘 코드
```

---

## 7. 윤리 고려사항 (Ethical Considerations)

- **IRB 승인:** 소속 기관 생명윤리심의위원회(IRB) 승인 필수
  - Phase II (n=10): 면제 심사 신청 가능 (비침습적 측정, 최소 위험)
  - Phase III (n=30): 정식 IRB 심사 (일반 심사)
- **동의서:** 서면 동의서 (설명문 + 동의서 포함)
- **개인정보:** 익명화 처리, 데이터 암호화 보관
- **위험 관리:** 사용 주파수(100 MHz)의 SAR(Specific Absorption Rate) 계산 → 안전 확인

---

## 8. 연구 일정 (Timeline)

| 단계 | 기간 | 주요 내용 | 산출물 |
|:---:|:---:|:---|:---:|
| 준비 단계 | 1–2개월 | 센서 제작, In-Vitro 실험 A/B, Calibration Curve | 회로도, Calibration 데이터 |
| Phase II | 3–4개월 | 파일럿 임상 (n=10), 프로토콜 최적화, 보정 알고리즘 개발 | PoC 보고서, 논문 초안 (Intro+Method) |
| Phase III | 5–7개월 | 대규모 임상 (n=30), Corneometer 비교, 화장품 효능 평가 | 임상 데이터, 결과 분석 |
| 논문 작성 | 8–9개월 | 결과 분석, Discussion, 논문 완성 | 완성 논문 투고 |
| 특허 출원 | 4–6개월 내 | 센서 구조 특허 + AI 보정 알고리즘 특허 | 특허 2건 출원 |

---

## 9. 예산 계획 (Budget Estimation)

| 항목 | 세부 내용 | 예상 비용 |
|:---:|:---|:---:|
| 센서 부품 (PoC) | Arduino, 74HC14, 코일 재료, HC-SR04, MLX90614 | 5만원 |
| 센서 부품 (고도화) | Si5351, VL53L0X, Rogers PCB 제작 | 30만원 |
| 측정 장비 | NanoVNA-H4 또는 Red Pitaya STEMlab | 30–200만원 |
| Corneometer 대여 | 비교 측정용 황금 표준 장비 | 100만원/월 |
| 임상 재료 | 화장품 3종, 소모품 | 20만원 |
| IRB 신청 비용 | 심사비 | 10만원 |
| 논문 투고 APC | Sensors & Actuators B (IF: 8.4) | 300–500만원 |
| **총계** | | **약 500–800만원** |

---

## 10. 참고 문헌 형식 (Key References to Cite)

논문 작성 시 참조할 핵심 선행 연구 영역:

1. **Corneometer 표준화:** Fluhr JW et al. (2000). *Skin Research and Technology*
2. **Eddy Current NDE 이론:** Dodd CV, Deeds WE (1968). *Journal of Applied Physics* — 고전 이론
3. **피부 전기적 특성:** Yamamoto T, Yamamoto Y (1976). *Medical & Biological Engineering*
4. **비접촉 피부 측정 선행:** [Eddy_Current_Skin_Sensing.pdf에서 인용 예정]
5. **AI 바이오센서 융합:** [AI_Biosensor_Development_Blueprint.pdf에서 인용 예정]
6. **Bland-Altman 분석 방법:** Bland JM, Altman DG (1986). *The Lancet*

---

*이 실험 계획서는 학술 논문 투고를 목표로 작성되었으며, 실험 구현 단계에서 IRB 심사 결과 및 예비 실험 결과에 따라 수정될 수 있습니다.*
