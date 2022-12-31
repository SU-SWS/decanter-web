import {
  AcademicCapIcon,
  ArrowUpIcon,
  BriefcaseIcon,
  CameraIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CogIcon,
  ExclamationIcon,
  GlobeAltIcon,
  HomeIcon,
  IdentificationIcon,
  InformationCircleIcon,
  KeyIcon,
  LinkIcon,
  LockClosedIcon as LockClosedOutlineIcon,
  MailIcon,
  MenuIcon,
  MicrophoneIcon,
  PencilIcon,
  PlusIcon,
  StarIcon,
  TrashIcon,
  UserGroupIcon,
  VideoCameraIcon,
  UserIcon,
  UserCircleIcon,
  CloudUploadIcon,
} from '@heroicons/react/outline';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  CheckCircleIcon,
  DownloadIcon,
  ExclamationCircleIcon,
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  PlayIcon,
  UploadIcon,
  XIcon,
  XCircleIcon,
} from '@heroicons/react/solid';

export const iconMap = {
  'academic-cap': AcademicCapIcon,
  action: ChevronRightIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-up': ArrowUpIcon,
  back: ArrowLeftIcon,
  briefcase: BriefcaseIcon,
  camera: CameraIcon,
  check: CheckIcon,
  'check-filled': CheckCircleIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-right': ChevronRightIcon,
  close: XIcon,
  cog: CogIcon,
  dismiss: XCircleIcon,
  download: DownloadIcon,
  email: MailIcon,
  error: ExclamationCircleIcon,
  'exclamation-circle': ExclamationCircleIcon,
  external: ArrowRightIcon,
  globe: GlobeAltIcon,
  home: HomeIcon,
  'id-card': IdentificationIcon,
  info: InformationCircleIcon,
  invisible: EyeOffIcon,
  jump: ChevronDownIcon,
  menu: MenuIcon,
  key: KeyIcon,
  left: ArrowLeftIcon,
  link: LinkIcon,
  lock: LockClosedIcon,
  'lock-outline': LockClosedOutlineIcon,
  more: ArrowRightIcon,
  pencil: PencilIcon,
  play: PlayIcon,
  plus: PlusIcon,
  podcast: MicrophoneIcon,
  right: ArrowRightIcon,
  star: StarIcon,
  trash: TrashIcon,
  up: ArrowUpIcon,
  upload: UploadIcon,
  'upload-cloud': CloudUploadIcon,
  user: UserIcon,
  'user-circle': UserCircleIcon,
  'user-group': UserGroupIcon,
  video: VideoCameraIcon,
  visible: EyeIcon,
  warning: ExclamationIcon,
  'x-circle': XCircleIcon,
};

// Base size and position of each icon (finetuned manually)
// Only add to this map if different from default class su-w-1em
export const iconBaseStyle = {
  default: 'su-w-1em',
  'academic-cap': 'su-w-08em su--mt-02em',
  'arrow-left': 'su-w-08em su--mt-02em',
  'arrow-right': 'su-w-08em su--mt-02em',
  camera: 'su-w-1em su--mt-02em',
  download: 'su-w-08em su--mt-02em',
  back: 'su-w-1em su--mt-02em',
  'chevron-right': 'su-w-1em su--mt-02em',
  'chevron-down': 'su-w-1em su--mt-01em',
  email: 'su-w-[1.2em]',
  external: 'su-w-08em su--rotate-45 group-hover:su--rotate-45 group-focus:su--rotate-45',
  home: 'su--mt-02em',
  left: 'su-w-08em su--mt-02em',
  link: 'su--mt-01em',
  lock: 'su-w-08em su--mt-02em',
  'lock-outline': 'su-w-08em su--mt-02em',
  more: 'su-w-08em su--mt-02em',
  plus: 'su-w-08em su--mt-02em',
  pencil: 'su-w-1em su--mt-02em',
  right: 'su-w-08em su--mt-02em',
  star: 'su-w-08em su--mt-02em',
  trash: 'su-w-1em su--mt-02em',
  up: 'su-w-1em su--mt-03em',
  upload: 'su-w-08em su--mt-02em',
  user: 'su-w-08em su--mt-02em',
  'user-circle': 'su-w-[1.2em] su--mt-02em',
};
