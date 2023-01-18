import { PropertyValue } from './prop-type'
import { Token } from './token'

type CssVarProperties = {
  [key in `--${string}`]?: Token | (string & {}) | (number & {})
}

export type SystemProperties = CssVarProperties & {
  	MsAccelerator?: PropertyValue<'MsAccelerator'>
	MsBlockProgression?: PropertyValue<'MsBlockProgression'>
	MsContentZoomChaining?: PropertyValue<'MsContentZoomChaining'>
	MsContentZooming?: PropertyValue<'MsContentZooming'>
	MsContentZoomLimit?: PropertyValue<'MsContentZoomLimit'>
	MsContentZoomLimitMax?: PropertyValue<'MsContentZoomLimitMax'>
	MsContentZoomLimitMin?: PropertyValue<'MsContentZoomLimitMin'>
	MsContentZoomSnap?: PropertyValue<'MsContentZoomSnap'>
	MsContentZoomSnapPoints?: PropertyValue<'MsContentZoomSnapPoints'>
	MsContentZoomSnapType?: PropertyValue<'MsContentZoomSnapType'>
	MsFilter?: PropertyValue<'MsFilter'>
	MsFlowFrom?: PropertyValue<'MsFlowFrom'>
	MsFlowInto?: PropertyValue<'MsFlowInto'>
	MsGridColumns?: PropertyValue<'MsGridColumns'>
	MsGridRows?: PropertyValue<'MsGridRows'>
	MsHighContrastAdjust?: PropertyValue<'MsHighContrastAdjust'>
	MsHyphenateLimitChars?: PropertyValue<'MsHyphenateLimitChars'>
	MsHyphenateLimitLines?: PropertyValue<'MsHyphenateLimitLines'>
	MsHyphenateLimitZone?: PropertyValue<'MsHyphenateLimitZone'>
	MsImeAlign?: PropertyValue<'MsImeAlign'>
	MsOverflowStyle?: PropertyValue<'MsOverflowStyle'>
	MsScrollbar3dlightColor?: PropertyValue<'MsScrollbar3dlightColor'>
	MsScrollbarArrowColor?: PropertyValue<'MsScrollbarArrowColor'>
	MsScrollbarBaseColor?: PropertyValue<'MsScrollbarBaseColor'>
	MsScrollbarDarkshadowColor?: PropertyValue<'MsScrollbarDarkshadowColor'>
	MsScrollbarFaceColor?: PropertyValue<'MsScrollbarFaceColor'>
	MsScrollbarHighlightColor?: PropertyValue<'MsScrollbarHighlightColor'>
	MsScrollbarShadowColor?: PropertyValue<'MsScrollbarShadowColor'>
	MsScrollbarTrackColor?: PropertyValue<'MsScrollbarTrackColor'>
	MsScrollChaining?: PropertyValue<'MsScrollChaining'>
	MsScrollLimit?: PropertyValue<'MsScrollLimit'>
	MsScrollLimitXMax?: PropertyValue<'MsScrollLimitXMax'>
	MsScrollLimitXMin?: PropertyValue<'MsScrollLimitXMin'>
	MsScrollLimitYMax?: PropertyValue<'MsScrollLimitYMax'>
	MsScrollLimitYMin?: PropertyValue<'MsScrollLimitYMin'>
	MsScrollRails?: PropertyValue<'MsScrollRails'>
	MsScrollSnapPointsX?: PropertyValue<'MsScrollSnapPointsX'>
	MsScrollSnapPointsY?: PropertyValue<'MsScrollSnapPointsY'>
	MsScrollSnapType?: PropertyValue<'MsScrollSnapType'>
	MsScrollSnapX?: PropertyValue<'MsScrollSnapX'>
	MsScrollSnapY?: PropertyValue<'MsScrollSnapY'>
	MsScrollTranslation?: PropertyValue<'MsScrollTranslation'>
	MsTextAutospace?: PropertyValue<'MsTextAutospace'>
	MsTouchSelect?: PropertyValue<'MsTouchSelect'>
	MsUserSelect?: PropertyValue<'MsUserSelect'>
	MsWrapFlow?: PropertyValue<'MsWrapFlow'>
	MsWrapMargin?: PropertyValue<'MsWrapMargin'>
	MsWrapThrough?: PropertyValue<'MsWrapThrough'>
	MozAppearance?: PropertyValue<'MozAppearance'>
	MozBinding?: PropertyValue<'MozBinding'>
	MozBorderBottomColors?: PropertyValue<'MozBorderBottomColors'>
	MozBorderLeftColors?: PropertyValue<'MozBorderLeftColors'>
	MozBorderRightColors?: PropertyValue<'MozBorderRightColors'>
	MozBorderTopColors?: PropertyValue<'MozBorderTopColors'>
	MozContextProperties?: PropertyValue<'MozContextProperties'>
	MozFloatEdge?: PropertyValue<'MozFloatEdge'>
	MozForceBrokenImageIcon?: PropertyValue<'MozForceBrokenImageIcon'>
	MozImageRegion?: PropertyValue<'MozImageRegion'>
	MozOrient?: PropertyValue<'MozOrient'>
	MozOutlineRadius?: PropertyValue<'MozOutlineRadius'>
	MozOutlineRadiusBottomleft?: PropertyValue<'MozOutlineRadiusBottomleft'>
	MozOutlineRadiusBottomright?: PropertyValue<'MozOutlineRadiusBottomright'>
	MozOutlineRadiusTopleft?: PropertyValue<'MozOutlineRadiusTopleft'>
	MozOutlineRadiusTopright?: PropertyValue<'MozOutlineRadiusTopright'>
	MozStackSizing?: PropertyValue<'MozStackSizing'>
	MozTextBlink?: PropertyValue<'MozTextBlink'>
	MozUserFocus?: PropertyValue<'MozUserFocus'>
	MozUserInput?: PropertyValue<'MozUserInput'>
	MozUserModify?: PropertyValue<'MozUserModify'>
	MozWindowDragging?: PropertyValue<'MozWindowDragging'>
	MozWindowShadow?: PropertyValue<'MozWindowShadow'>
	WebkitAppearance?: PropertyValue<'WebkitAppearance'>
	WebkitBorderBefore?: PropertyValue<'WebkitBorderBefore'>
	WebkitBorderBeforeColor?: PropertyValue<'WebkitBorderBeforeColor'>
	WebkitBorderBeforeStyle?: PropertyValue<'WebkitBorderBeforeStyle'>
	WebkitBorderBeforeWidth?: PropertyValue<'WebkitBorderBeforeWidth'>
	WebkitBoxReflect?: PropertyValue<'WebkitBoxReflect'>
	WebkitLineClamp?: PropertyValue<'WebkitLineClamp'>
	WebkitMask?: PropertyValue<'WebkitMask'>
	WebkitMaskAttachment?: PropertyValue<'WebkitMaskAttachment'>
	WebkitMaskClip?: PropertyValue<'WebkitMaskClip'>
	WebkitMaskComposite?: PropertyValue<'WebkitMaskComposite'>
	WebkitMaskImage?: PropertyValue<'WebkitMaskImage'>
	WebkitMaskOrigin?: PropertyValue<'WebkitMaskOrigin'>
	WebkitMaskPosition?: PropertyValue<'WebkitMaskPosition'>
	WebkitMaskPositionX?: PropertyValue<'WebkitMaskPositionX'>
	WebkitMaskPositionY?: PropertyValue<'WebkitMaskPositionY'>
	WebkitMaskRepeat?: PropertyValue<'WebkitMaskRepeat'>
	WebkitMaskRepeatX?: PropertyValue<'WebkitMaskRepeatX'>
	WebkitMaskRepeatY?: PropertyValue<'WebkitMaskRepeatY'>
	WebkitMaskSize?: PropertyValue<'WebkitMaskSize'>
	WebkitOverflowScrolling?: PropertyValue<'WebkitOverflowScrolling'>
	WebkitTapHighlightColor?: PropertyValue<'WebkitTapHighlightColor'>
	WebkitTextFillColor?: PropertyValue<'WebkitTextFillColor'>
	WebkitTextStroke?: PropertyValue<'WebkitTextStroke'>
	WebkitTextStrokeColor?: PropertyValue<'WebkitTextStrokeColor'>
	WebkitTextStrokeWidth?: PropertyValue<'WebkitTextStrokeWidth'>
	WebkitTouchCallout?: PropertyValue<'WebkitTouchCallout'>
	WebkitUserModify?: PropertyValue<'WebkitUserModify'>
	accentColor?: PropertyValue<'accentColor'>
	alignContent?: PropertyValue<'alignContent'>
	alignItems?: PropertyValue<'alignItems'>
	alignSelf?: PropertyValue<'alignSelf'>
	alignTracks?: PropertyValue<'alignTracks'>
	all?: PropertyValue<'all'>
	animation?: PropertyValue<'animation'>
	animationComposition?: PropertyValue<'animationComposition'>
	animationDelay?: PropertyValue<'animationDelay'>
	animationDirection?: PropertyValue<'animationDirection'>
	animationDuration?: PropertyValue<'animationDuration'>
	animationFillMode?: PropertyValue<'animationFillMode'>
	animationIterationCount?: PropertyValue<'animationIterationCount'>
	animationName?: PropertyValue<'animationName'>
	animationPlayState?: PropertyValue<'animationPlayState'>
	animationTimingFunction?: PropertyValue<'animationTimingFunction'>
	animationTimeline?: PropertyValue<'animationTimeline'>
	appearance?: PropertyValue<'appearance'>
	aspectRatio?: PropertyValue<'aspectRatio'>
	azimuth?: PropertyValue<'azimuth'>
	backdropFilter?: PropertyValue<'backdropFilter'>
	backfaceVisibility?: PropertyValue<'backfaceVisibility'>
	background?: PropertyValue<'background'>
	backgroundAttachment?: PropertyValue<'backgroundAttachment'>
	backgroundBlendMode?: PropertyValue<'backgroundBlendMode'>
	backgroundClip?: PropertyValue<'backgroundClip'>
	backgroundColor?: PropertyValue<'backgroundColor'>
	backgroundImage?: PropertyValue<'backgroundImage'>
	backgroundOrigin?: PropertyValue<'backgroundOrigin'>
	backgroundPosition?: PropertyValue<'backgroundPosition'>
	backgroundPositionX?: PropertyValue<'backgroundPositionX'>
	backgroundPositionY?: PropertyValue<'backgroundPositionY'>
	backgroundRepeat?: PropertyValue<'backgroundRepeat'>
	backgroundSize?: PropertyValue<'backgroundSize'>
	blockOverflow?: PropertyValue<'blockOverflow'>
	blockSize?: PropertyValue<'blockSize'>
	border?: PropertyValue<'border'>
	borderBlock?: PropertyValue<'borderBlock'>
	borderBlockColor?: PropertyValue<'borderBlockColor'>
	borderBlockStyle?: PropertyValue<'borderBlockStyle'>
	borderBlockWidth?: PropertyValue<'borderBlockWidth'>
	borderBlockEnd?: PropertyValue<'borderBlockEnd'>
	borderBlockEndColor?: PropertyValue<'borderBlockEndColor'>
	borderBlockEndStyle?: PropertyValue<'borderBlockEndStyle'>
	borderBlockEndWidth?: PropertyValue<'borderBlockEndWidth'>
	borderBlockStart?: PropertyValue<'borderBlockStart'>
	borderBlockStartColor?: PropertyValue<'borderBlockStartColor'>
	borderBlockStartStyle?: PropertyValue<'borderBlockStartStyle'>
	borderBlockStartWidth?: PropertyValue<'borderBlockStartWidth'>
	borderBottom?: PropertyValue<'borderBottom'>
	borderBottomColor?: PropertyValue<'borderBottomColor'>
	borderBottomLeftRadius?: PropertyValue<'borderBottomLeftRadius'>
	borderBottomRightRadius?: PropertyValue<'borderBottomRightRadius'>
	borderBottomStyle?: PropertyValue<'borderBottomStyle'>
	borderBottomWidth?: PropertyValue<'borderBottomWidth'>
	borderCollapse?: PropertyValue<'borderCollapse'>
	borderColor?: PropertyValue<'borderColor'>
	borderEndEndRadius?: PropertyValue<'borderEndEndRadius'>
	borderEndStartRadius?: PropertyValue<'borderEndStartRadius'>
	borderImage?: PropertyValue<'borderImage'>
	borderImageOutset?: PropertyValue<'borderImageOutset'>
	borderImageRepeat?: PropertyValue<'borderImageRepeat'>
	borderImageSlice?: PropertyValue<'borderImageSlice'>
	borderImageSource?: PropertyValue<'borderImageSource'>
	borderImageWidth?: PropertyValue<'borderImageWidth'>
	borderInline?: PropertyValue<'borderInline'>
	borderInlineEnd?: PropertyValue<'borderInlineEnd'>
	borderInlineColor?: PropertyValue<'borderInlineColor'>
	borderInlineStyle?: PropertyValue<'borderInlineStyle'>
	borderInlineWidth?: PropertyValue<'borderInlineWidth'>
	borderInlineEndColor?: PropertyValue<'borderInlineEndColor'>
	borderInlineEndStyle?: PropertyValue<'borderInlineEndStyle'>
	borderInlineEndWidth?: PropertyValue<'borderInlineEndWidth'>
	borderInlineStart?: PropertyValue<'borderInlineStart'>
	borderInlineStartColor?: PropertyValue<'borderInlineStartColor'>
	borderInlineStartStyle?: PropertyValue<'borderInlineStartStyle'>
	borderInlineStartWidth?: PropertyValue<'borderInlineStartWidth'>
	borderLeft?: PropertyValue<'borderLeft'>
	borderLeftColor?: PropertyValue<'borderLeftColor'>
	borderLeftStyle?: PropertyValue<'borderLeftStyle'>
	borderLeftWidth?: PropertyValue<'borderLeftWidth'>
	borderRadius?: PropertyValue<'borderRadius'>
	borderRight?: PropertyValue<'borderRight'>
	borderRightColor?: PropertyValue<'borderRightColor'>
	borderRightStyle?: PropertyValue<'borderRightStyle'>
	borderRightWidth?: PropertyValue<'borderRightWidth'>
	borderSpacing?: PropertyValue<'borderSpacing'>
	borderStartEndRadius?: PropertyValue<'borderStartEndRadius'>
	borderStartStartRadius?: PropertyValue<'borderStartStartRadius'>
	borderStyle?: PropertyValue<'borderStyle'>
	borderTop?: PropertyValue<'borderTop'>
	borderTopColor?: PropertyValue<'borderTopColor'>
	borderTopLeftRadius?: PropertyValue<'borderTopLeftRadius'>
	borderTopRightRadius?: PropertyValue<'borderTopRightRadius'>
	borderTopStyle?: PropertyValue<'borderTopStyle'>
	borderTopWidth?: PropertyValue<'borderTopWidth'>
	borderWidth?: PropertyValue<'borderWidth'>
	bottom?: PropertyValue<'bottom'>
	boxAlign?: PropertyValue<'boxAlign'>
	boxDecorationBreak?: PropertyValue<'boxDecorationBreak'>
	boxDirection?: PropertyValue<'boxDirection'>
	boxFlex?: PropertyValue<'boxFlex'>
	boxFlexGroup?: PropertyValue<'boxFlexGroup'>
	boxLines?: PropertyValue<'boxLines'>
	boxOrdinalGroup?: PropertyValue<'boxOrdinalGroup'>
	boxOrient?: PropertyValue<'boxOrient'>
	boxPack?: PropertyValue<'boxPack'>
	boxShadow?: PropertyValue<'boxShadow'>
	boxSizing?: PropertyValue<'boxSizing'>
	breakAfter?: PropertyValue<'breakAfter'>
	breakBefore?: PropertyValue<'breakBefore'>
	breakInside?: PropertyValue<'breakInside'>
	captionSide?: PropertyValue<'captionSide'>
	caret?: PropertyValue<'caret'>
	caretColor?: PropertyValue<'caretColor'>
	caretShape?: PropertyValue<'caretShape'>
	clear?: PropertyValue<'clear'>
	clip?: PropertyValue<'clip'>
	clipPath?: PropertyValue<'clipPath'>
	color?: PropertyValue<'color'>
	printColorAdjust?: PropertyValue<'printColorAdjust'>
	colorScheme?: PropertyValue<'colorScheme'>
	columnCount?: PropertyValue<'columnCount'>
	columnFill?: PropertyValue<'columnFill'>
	columnGap?: PropertyValue<'columnGap'>
	columnRule?: PropertyValue<'columnRule'>
	columnRuleColor?: PropertyValue<'columnRuleColor'>
	columnRuleStyle?: PropertyValue<'columnRuleStyle'>
	columnRuleWidth?: PropertyValue<'columnRuleWidth'>
	columnSpan?: PropertyValue<'columnSpan'>
	columnWidth?: PropertyValue<'columnWidth'>
	columns?: PropertyValue<'columns'>
	contain?: PropertyValue<'contain'>
	containIntrinsicSize?: PropertyValue<'containIntrinsicSize'>
	containIntrinsicBlockSize?: PropertyValue<'containIntrinsicBlockSize'>
	containIntrinsicHeight?: PropertyValue<'containIntrinsicHeight'>
	containIntrinsicInlineSize?: PropertyValue<'containIntrinsicInlineSize'>
	containIntrinsicWidth?: PropertyValue<'containIntrinsicWidth'>
	content?: PropertyValue<'content'>
	contentVisibility?: PropertyValue<'contentVisibility'>
	counterIncrement?: PropertyValue<'counterIncrement'>
	counterReset?: PropertyValue<'counterReset'>
	counterSet?: PropertyValue<'counterSet'>
	cursor?: PropertyValue<'cursor'>
	direction?: PropertyValue<'direction'>
	display?: PropertyValue<'display'>
	emptyCells?: PropertyValue<'emptyCells'>
	filter?: PropertyValue<'filter'>
	flex?: PropertyValue<'flex'>
	flexBasis?: PropertyValue<'flexBasis'>
	flexDirection?: PropertyValue<'flexDirection'>
	flexFlow?: PropertyValue<'flexFlow'>
	flexGrow?: PropertyValue<'flexGrow'>
	flexShrink?: PropertyValue<'flexShrink'>
	flexWrap?: PropertyValue<'flexWrap'>
	float?: PropertyValue<'float'>
	font?: PropertyValue<'font'>
	fontFamily?: PropertyValue<'fontFamily'>
	fontFeatureSettings?: PropertyValue<'fontFeatureSettings'>
	fontKerning?: PropertyValue<'fontKerning'>
	fontLanguageOverride?: PropertyValue<'fontLanguageOverride'>
	fontOpticalSizing?: PropertyValue<'fontOpticalSizing'>
	fontVariationSettings?: PropertyValue<'fontVariationSettings'>
	fontSize?: PropertyValue<'fontSize'>
	fontSizeAdjust?: PropertyValue<'fontSizeAdjust'>
	fontSmooth?: PropertyValue<'fontSmooth'>
	fontStretch?: PropertyValue<'fontStretch'>
	fontStyle?: PropertyValue<'fontStyle'>
	fontSynthesis?: PropertyValue<'fontSynthesis'>
	fontVariant?: PropertyValue<'fontVariant'>
	fontVariantAlternates?: PropertyValue<'fontVariantAlternates'>
	fontVariantCaps?: PropertyValue<'fontVariantCaps'>
	fontVariantEastAsian?: PropertyValue<'fontVariantEastAsian'>
	fontVariantLigatures?: PropertyValue<'fontVariantLigatures'>
	fontVariantNumeric?: PropertyValue<'fontVariantNumeric'>
	fontVariantPosition?: PropertyValue<'fontVariantPosition'>
	fontWeight?: PropertyValue<'fontWeight'>
	forcedColorAdjust?: PropertyValue<'forcedColorAdjust'>
	gap?: PropertyValue<'gap'>
	grid?: PropertyValue<'grid'>
	gridArea?: PropertyValue<'gridArea'>
	gridAutoColumns?: PropertyValue<'gridAutoColumns'>
	gridAutoFlow?: PropertyValue<'gridAutoFlow'>
	gridAutoRows?: PropertyValue<'gridAutoRows'>
	gridColumn?: PropertyValue<'gridColumn'>
	gridColumnEnd?: PropertyValue<'gridColumnEnd'>
	gridColumnGap?: PropertyValue<'gridColumnGap'>
	gridColumnStart?: PropertyValue<'gridColumnStart'>
	gridGap?: PropertyValue<'gridGap'>
	gridRow?: PropertyValue<'gridRow'>
	gridRowEnd?: PropertyValue<'gridRowEnd'>
	gridRowGap?: PropertyValue<'gridRowGap'>
	gridRowStart?: PropertyValue<'gridRowStart'>
	gridTemplate?: PropertyValue<'gridTemplate'>
	gridTemplateAreas?: PropertyValue<'gridTemplateAreas'>
	gridTemplateColumns?: PropertyValue<'gridTemplateColumns'>
	gridTemplateRows?: PropertyValue<'gridTemplateRows'>
	hangingPunctuation?: PropertyValue<'hangingPunctuation'>
	height?: PropertyValue<'height'>
	hyphenateCharacter?: PropertyValue<'hyphenateCharacter'>
	hyphens?: PropertyValue<'hyphens'>
	imageOrientation?: PropertyValue<'imageOrientation'>
	imageRendering?: PropertyValue<'imageRendering'>
	imageResolution?: PropertyValue<'imageResolution'>
	imeMode?: PropertyValue<'imeMode'>
	initialLetter?: PropertyValue<'initialLetter'>
	initialLetterAlign?: PropertyValue<'initialLetterAlign'>
	inlineSize?: PropertyValue<'inlineSize'>
	inputSecurity?: PropertyValue<'inputSecurity'>
	inset?: PropertyValue<'inset'>
	insetBlock?: PropertyValue<'insetBlock'>
	insetBlockEnd?: PropertyValue<'insetBlockEnd'>
	insetBlockStart?: PropertyValue<'insetBlockStart'>
	insetInline?: PropertyValue<'insetInline'>
	insetInlineEnd?: PropertyValue<'insetInlineEnd'>
	insetInlineStart?: PropertyValue<'insetInlineStart'>
	isolation?: PropertyValue<'isolation'>
	justifyContent?: PropertyValue<'justifyContent'>
	justifyItems?: PropertyValue<'justifyItems'>
	justifySelf?: PropertyValue<'justifySelf'>
	justifyTracks?: PropertyValue<'justifyTracks'>
	left?: PropertyValue<'left'>
	letterSpacing?: PropertyValue<'letterSpacing'>
	lineBreak?: PropertyValue<'lineBreak'>
	lineClamp?: PropertyValue<'lineClamp'>
	lineHeight?: PropertyValue<'lineHeight'>
	lineHeightStep?: PropertyValue<'lineHeightStep'>
	listStyle?: PropertyValue<'listStyle'>
	listStyleImage?: PropertyValue<'listStyleImage'>
	listStylePosition?: PropertyValue<'listStylePosition'>
	listStyleType?: PropertyValue<'listStyleType'>
	margin?: PropertyValue<'margin'>
	marginBlock?: PropertyValue<'marginBlock'>
	marginBlockEnd?: PropertyValue<'marginBlockEnd'>
	marginBlockStart?: PropertyValue<'marginBlockStart'>
	marginBottom?: PropertyValue<'marginBottom'>
	marginInline?: PropertyValue<'marginInline'>
	marginInlineEnd?: PropertyValue<'marginInlineEnd'>
	marginInlineStart?: PropertyValue<'marginInlineStart'>
	marginLeft?: PropertyValue<'marginLeft'>
	marginRight?: PropertyValue<'marginRight'>
	marginTop?: PropertyValue<'marginTop'>
	marginTrim?: PropertyValue<'marginTrim'>
	mask?: PropertyValue<'mask'>
	maskBorder?: PropertyValue<'maskBorder'>
	maskBorderMode?: PropertyValue<'maskBorderMode'>
	maskBorderOutset?: PropertyValue<'maskBorderOutset'>
	maskBorderRepeat?: PropertyValue<'maskBorderRepeat'>
	maskBorderSlice?: PropertyValue<'maskBorderSlice'>
	maskBorderSource?: PropertyValue<'maskBorderSource'>
	maskBorderWidth?: PropertyValue<'maskBorderWidth'>
	maskClip?: PropertyValue<'maskClip'>
	maskComposite?: PropertyValue<'maskComposite'>
	maskImage?: PropertyValue<'maskImage'>
	maskMode?: PropertyValue<'maskMode'>
	maskOrigin?: PropertyValue<'maskOrigin'>
	maskPosition?: PropertyValue<'maskPosition'>
	maskRepeat?: PropertyValue<'maskRepeat'>
	maskSize?: PropertyValue<'maskSize'>
	maskType?: PropertyValue<'maskType'>
	masonryAutoFlow?: PropertyValue<'masonryAutoFlow'>
	mathDepth?: PropertyValue<'mathDepth'>
	mathShift?: PropertyValue<'mathShift'>
	mathStyle?: PropertyValue<'mathStyle'>
	maxBlockSize?: PropertyValue<'maxBlockSize'>
	maxHeight?: PropertyValue<'maxHeight'>
	maxInlineSize?: PropertyValue<'maxInlineSize'>
	maxLines?: PropertyValue<'maxLines'>
	maxWidth?: PropertyValue<'maxWidth'>
	minBlockSize?: PropertyValue<'minBlockSize'>
	minHeight?: PropertyValue<'minHeight'>
	minInlineSize?: PropertyValue<'minInlineSize'>
	minWidth?: PropertyValue<'minWidth'>
	mixBlendMode?: PropertyValue<'mixBlendMode'>
	objectFit?: PropertyValue<'objectFit'>
	objectPosition?: PropertyValue<'objectPosition'>
	offset?: PropertyValue<'offset'>
	offsetAnchor?: PropertyValue<'offsetAnchor'>
	offsetDistance?: PropertyValue<'offsetDistance'>
	offsetPath?: PropertyValue<'offsetPath'>
	offsetPosition?: PropertyValue<'offsetPosition'>
	offsetRotate?: PropertyValue<'offsetRotate'>
	opacity?: PropertyValue<'opacity'>
	order?: PropertyValue<'order'>
	orphans?: PropertyValue<'orphans'>
	outline?: PropertyValue<'outline'>
	outlineColor?: PropertyValue<'outlineColor'>
	outlineOffset?: PropertyValue<'outlineOffset'>
	outlineStyle?: PropertyValue<'outlineStyle'>
	outlineWidth?: PropertyValue<'outlineWidth'>
	overflow?: PropertyValue<'overflow'>
	overflowAnchor?: PropertyValue<'overflowAnchor'>
	overflowBlock?: PropertyValue<'overflowBlock'>
	overflowClipBox?: PropertyValue<'overflowClipBox'>
	overflowClipMargin?: PropertyValue<'overflowClipMargin'>
	overflowInline?: PropertyValue<'overflowInline'>
	overflowWrap?: PropertyValue<'overflowWrap'>
	overflowX?: PropertyValue<'overflowX'>
	overflowY?: PropertyValue<'overflowY'>
	overscrollBehavior?: PropertyValue<'overscrollBehavior'>
	overscrollBehaviorBlock?: PropertyValue<'overscrollBehaviorBlock'>
	overscrollBehaviorInline?: PropertyValue<'overscrollBehaviorInline'>
	overscrollBehaviorX?: PropertyValue<'overscrollBehaviorX'>
	overscrollBehaviorY?: PropertyValue<'overscrollBehaviorY'>
	padding?: PropertyValue<'padding'>
	paddingBlock?: PropertyValue<'paddingBlock'>
	paddingBlockEnd?: PropertyValue<'paddingBlockEnd'>
	paddingBlockStart?: PropertyValue<'paddingBlockStart'>
	paddingBottom?: PropertyValue<'paddingBottom'>
	paddingInline?: PropertyValue<'paddingInline'>
	paddingInlineEnd?: PropertyValue<'paddingInlineEnd'>
	paddingInlineStart?: PropertyValue<'paddingInlineStart'>
	paddingLeft?: PropertyValue<'paddingLeft'>
	paddingRight?: PropertyValue<'paddingRight'>
	paddingTop?: PropertyValue<'paddingTop'>
	pageBreakAfter?: PropertyValue<'pageBreakAfter'>
	pageBreakBefore?: PropertyValue<'pageBreakBefore'>
	pageBreakInside?: PropertyValue<'pageBreakInside'>
	paintOrder?: PropertyValue<'paintOrder'>
	perspective?: PropertyValue<'perspective'>
	perspectiveOrigin?: PropertyValue<'perspectiveOrigin'>
	placeContent?: PropertyValue<'placeContent'>
	placeItems?: PropertyValue<'placeItems'>
	placeSelf?: PropertyValue<'placeSelf'>
	pointerEvents?: PropertyValue<'pointerEvents'>
	position?: PropertyValue<'position'>
	quotes?: PropertyValue<'quotes'>
	resize?: PropertyValue<'resize'>
	right?: PropertyValue<'right'>
	rotate?: PropertyValue<'rotate'>
	rowGap?: PropertyValue<'rowGap'>
	rubyAlign?: PropertyValue<'rubyAlign'>
	rubyMerge?: PropertyValue<'rubyMerge'>
	rubyPosition?: PropertyValue<'rubyPosition'>
	scale?: PropertyValue<'scale'>
	scrollbarColor?: PropertyValue<'scrollbarColor'>
	scrollbarGutter?: PropertyValue<'scrollbarGutter'>
	scrollbarWidth?: PropertyValue<'scrollbarWidth'>
	scrollBehavior?: PropertyValue<'scrollBehavior'>
	scrollMargin?: PropertyValue<'scrollMargin'>
	scrollMarginBlock?: PropertyValue<'scrollMarginBlock'>
	scrollMarginBlockStart?: PropertyValue<'scrollMarginBlockStart'>
	scrollMarginBlockEnd?: PropertyValue<'scrollMarginBlockEnd'>
	scrollMarginBottom?: PropertyValue<'scrollMarginBottom'>
	scrollMarginInline?: PropertyValue<'scrollMarginInline'>
	scrollMarginInlineStart?: PropertyValue<'scrollMarginInlineStart'>
	scrollMarginInlineEnd?: PropertyValue<'scrollMarginInlineEnd'>
	scrollMarginLeft?: PropertyValue<'scrollMarginLeft'>
	scrollMarginRight?: PropertyValue<'scrollMarginRight'>
	scrollMarginTop?: PropertyValue<'scrollMarginTop'>
	scrollPadding?: PropertyValue<'scrollPadding'>
	scrollPaddingBlock?: PropertyValue<'scrollPaddingBlock'>
	scrollPaddingBlockStart?: PropertyValue<'scrollPaddingBlockStart'>
	scrollPaddingBlockEnd?: PropertyValue<'scrollPaddingBlockEnd'>
	scrollPaddingBottom?: PropertyValue<'scrollPaddingBottom'>
	scrollPaddingInline?: PropertyValue<'scrollPaddingInline'>
	scrollPaddingInlineStart?: PropertyValue<'scrollPaddingInlineStart'>
	scrollPaddingInlineEnd?: PropertyValue<'scrollPaddingInlineEnd'>
	scrollPaddingLeft?: PropertyValue<'scrollPaddingLeft'>
	scrollPaddingRight?: PropertyValue<'scrollPaddingRight'>
	scrollPaddingTop?: PropertyValue<'scrollPaddingTop'>
	scrollSnapAlign?: PropertyValue<'scrollSnapAlign'>
	scrollSnapCoordinate?: PropertyValue<'scrollSnapCoordinate'>
	scrollSnapDestination?: PropertyValue<'scrollSnapDestination'>
	scrollSnapPointsX?: PropertyValue<'scrollSnapPointsX'>
	scrollSnapPointsY?: PropertyValue<'scrollSnapPointsY'>
	scrollSnapStop?: PropertyValue<'scrollSnapStop'>
	scrollSnapType?: PropertyValue<'scrollSnapType'>
	scrollSnapTypeX?: PropertyValue<'scrollSnapTypeX'>
	scrollSnapTypeY?: PropertyValue<'scrollSnapTypeY'>
	scrollTimeline?: PropertyValue<'scrollTimeline'>
	scrollTimelineAxis?: PropertyValue<'scrollTimelineAxis'>
	scrollTimelineName?: PropertyValue<'scrollTimelineName'>
	shapeImageThreshold?: PropertyValue<'shapeImageThreshold'>
	shapeMargin?: PropertyValue<'shapeMargin'>
	shapeOutside?: PropertyValue<'shapeOutside'>
	tabSize?: PropertyValue<'tabSize'>
	tableLayout?: PropertyValue<'tableLayout'>
	textAlign?: PropertyValue<'textAlign'>
	textAlignLast?: PropertyValue<'textAlignLast'>
	textCombineUpright?: PropertyValue<'textCombineUpright'>
	textDecoration?: PropertyValue<'textDecoration'>
	textDecorationColor?: PropertyValue<'textDecorationColor'>
	textDecorationLine?: PropertyValue<'textDecorationLine'>
	textDecorationSkip?: PropertyValue<'textDecorationSkip'>
	textDecorationSkipInk?: PropertyValue<'textDecorationSkipInk'>
	textDecorationStyle?: PropertyValue<'textDecorationStyle'>
	textDecorationThickness?: PropertyValue<'textDecorationThickness'>
	textEmphasis?: PropertyValue<'textEmphasis'>
	textEmphasisColor?: PropertyValue<'textEmphasisColor'>
	textEmphasisPosition?: PropertyValue<'textEmphasisPosition'>
	textEmphasisStyle?: PropertyValue<'textEmphasisStyle'>
	textIndent?: PropertyValue<'textIndent'>
	textJustify?: PropertyValue<'textJustify'>
	textOrientation?: PropertyValue<'textOrientation'>
	textOverflow?: PropertyValue<'textOverflow'>
	textRendering?: PropertyValue<'textRendering'>
	textShadow?: PropertyValue<'textShadow'>
	textSizeAdjust?: PropertyValue<'textSizeAdjust'>
	textTransform?: PropertyValue<'textTransform'>
	textUnderlineOffset?: PropertyValue<'textUnderlineOffset'>
	textUnderlinePosition?: PropertyValue<'textUnderlinePosition'>
	top?: PropertyValue<'top'>
	touchAction?: PropertyValue<'touchAction'>
	transform?: PropertyValue<'transform'>
	transformBox?: PropertyValue<'transformBox'>
	transformOrigin?: PropertyValue<'transformOrigin'>
	transformStyle?: PropertyValue<'transformStyle'>
	transition?: PropertyValue<'transition'>
	transitionDelay?: PropertyValue<'transitionDelay'>
	transitionDuration?: PropertyValue<'transitionDuration'>
	transitionProperty?: PropertyValue<'transitionProperty'>
	transitionTimingFunction?: PropertyValue<'transitionTimingFunction'>
	translate?: PropertyValue<'translate'>
	unicodeBidi?: PropertyValue<'unicodeBidi'>
	userSelect?: PropertyValue<'userSelect'>
	verticalAlign?: PropertyValue<'verticalAlign'>
	visibility?: PropertyValue<'visibility'>
	whiteSpace?: PropertyValue<'whiteSpace'>
	widows?: PropertyValue<'widows'>
	width?: PropertyValue<'width'>
	willChange?: PropertyValue<'willChange'>
	wordBreak?: PropertyValue<'wordBreak'>
	wordSpacing?: PropertyValue<'wordSpacing'>
	wordWrap?: PropertyValue<'wordWrap'>
	writingMode?: PropertyValue<'writingMode'>
	zIndex?: PropertyValue<'zIndex'>
	zoom?: PropertyValue<'zoom'>
	pos?: PropertyValue<'pos'>
	flexDir?: PropertyValue<'flexDir'>
	p?: PropertyValue<'p'>
	pl?: PropertyValue<'pl'>
	pr?: PropertyValue<'pr'>
	pt?: PropertyValue<'pt'>
	pb?: PropertyValue<'pb'>
	pe?: PropertyValue<'pe'>
	ps?: PropertyValue<'ps'>
	px?: PropertyValue<'px'>
	py?: PropertyValue<'py'>
	ml?: PropertyValue<'ml'>
	mr?: PropertyValue<'mr'>
	mt?: PropertyValue<'mt'>
	mb?: PropertyValue<'mb'>
	m?: PropertyValue<'m'>
	mx?: PropertyValue<'mx'>
	my?: PropertyValue<'my'>
	me?: PropertyValue<'me'>
	ms?: PropertyValue<'ms'>
	w?: PropertyValue<'w'>
	h?: PropertyValue<'h'>
	minH?: PropertyValue<'minH'>
	maxH?: PropertyValue<'maxH'>
	minW?: PropertyValue<'minW'>
	maxW?: PropertyValue<'maxW'>
	bgAttachment?: PropertyValue<'bgAttachment'>
	bgClip?: PropertyValue<'bgClip'>
	bg?: PropertyValue<'bg'>
	bgColor?: PropertyValue<'bgColor'>
	bgPos?: PropertyValue<'bgPos'>
	bgOrigin?: PropertyValue<'bgOrigin'>
	bgImage?: PropertyValue<'bgImage'>
	bgRepeat?: PropertyValue<'bgRepeat'>
	bgBlend?: PropertyValue<'bgBlend'>
	bgSize?: PropertyValue<'bgSize'>
	bgGradient?: PropertyValue<'bgGradient'>
	shadow?: PropertyValue<'shadow'>
	shadowColor?: PropertyValue<'shadowColor'>
	x?: PropertyValue<'x'>
	y?: PropertyValue<'y'>
	start?: PropertyValue<'start'>
	end?: PropertyValue<'end'>
	insetX?: PropertyValue<'insetX'>
	insetY?: PropertyValue<'insetY'>
	paddingX?: PropertyValue<'paddingX'>
	paddingY?: PropertyValue<'paddingY'>
	marginX?: PropertyValue<'marginX'>
	marginY?: PropertyValue<'marginY'>
	spaceX?: PropertyValue<'spaceX'>
	spaceY?: PropertyValue<'spaceY'>
	fontSmoothing?: PropertyValue<'fontSmoothing'>
	truncate?: PropertyValue<'truncate'>
	backgroundGradient?: PropertyValue<'backgroundGradient'>
	textGradient?: PropertyValue<'textGradient'>
	gradientFrom?: PropertyValue<'gradientFrom'>
	gradientTo?: PropertyValue<'gradientTo'>
	gradientVia?: PropertyValue<'gradientVia'>
	borderTopRadius?: PropertyValue<'borderTopRadius'>
	borderRightRadius?: PropertyValue<'borderRightRadius'>
	borderBottomRadius?: PropertyValue<'borderBottomRadius'>
	borderLeftRadius?: PropertyValue<'borderLeftRadius'>
	borderStartRadius?: PropertyValue<'borderStartRadius'>
	borderEndRadius?: PropertyValue<'borderEndRadius'>
	borderXColor?: PropertyValue<'borderXColor'>
	borderYColor?: PropertyValue<'borderYColor'>
	borderX?: PropertyValue<'borderX'>
	borderY?: PropertyValue<'borderY'>
	divideX?: PropertyValue<'divideX'>
	divideY?: PropertyValue<'divideY'>
	divideColor?: PropertyValue<'divideColor'>
	divideStyle?: PropertyValue<'divideStyle'>
	boxShadowColor?: PropertyValue<'boxShadowColor'>
	brightness?: PropertyValue<'brightness'>
	contrast?: PropertyValue<'contrast'>
	grayscale?: PropertyValue<'grayscale'>
	hueRotate?: PropertyValue<'hueRotate'>
	invert?: PropertyValue<'invert'>
	saturate?: PropertyValue<'saturate'>
	sepia?: PropertyValue<'sepia'>
	dropShadow?: PropertyValue<'dropShadow'>
	blur?: PropertyValue<'blur'>
	backdropBlur?: PropertyValue<'backdropBlur'>
	backdropBrightness?: PropertyValue<'backdropBrightness'>
	backdropContrast?: PropertyValue<'backdropContrast'>
	backdropGrayscale?: PropertyValue<'backdropGrayscale'>
	backdropHueRotate?: PropertyValue<'backdropHueRotate'>
	backdropInvert?: PropertyValue<'backdropInvert'>
	backdropOpacity?: PropertyValue<'backdropOpacity'>
	backdropSaturate?: PropertyValue<'backdropSaturate'>
	backdropSepia?: PropertyValue<'backdropSepia'>
	borderSpacingX?: PropertyValue<'borderSpacingX'>
	borderSpacingY?: PropertyValue<'borderSpacingY'>
	scaleX?: PropertyValue<'scaleX'>
	scaleY?: PropertyValue<'scaleY'>
	translateX?: PropertyValue<'translateX'>
	translateY?: PropertyValue<'translateY'>
	skewX?: PropertyValue<'skewX'>
	skewY?: PropertyValue<'skewY'>
	scrollbar?: PropertyValue<'scrollbar'>
	scrollMarginX?: PropertyValue<'scrollMarginX'>
	scrollMarginY?: PropertyValue<'scrollMarginY'>
	scrollPaddingX?: PropertyValue<'scrollPaddingX'>
	scrollPaddingY?: PropertyValue<'scrollPaddingY'>
	scrollSnapStrictness?: PropertyValue<'scrollSnapStrictness'>
	scrollSnapMargin?: PropertyValue<'scrollSnapMargin'>
	scrollSnapMarginTop?: PropertyValue<'scrollSnapMarginTop'>
	scrollSnapMarginBottom?: PropertyValue<'scrollSnapMarginBottom'>
	scrollSnapMarginLeft?: PropertyValue<'scrollSnapMarginLeft'>
	scrollSnapMarginRight?: PropertyValue<'scrollSnapMarginRight'>
	fill?: PropertyValue<'fill'>
	stroke?: PropertyValue<'stroke'>
	srOnly?: PropertyValue<'srOnly'>
	debug?: PropertyValue<'debug'>
	borderSlim?: PropertyValue<'borderSlim'>
	colorPalette?: PropertyValue<'colorPalette'>
	textStyle?: PropertyValue<'textStyle'>
}