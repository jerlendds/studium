# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Authentication endpoints now use email as the unique id 2021-04-20

### Added
- Connected login endpoints to database 2021-04-20
- FastAPI account creation endpoint 2021-04-19
- Added dependency email-validator
- FastAPI dependency w/ intention of creating public api 2021-04-17
- CouchDB dependency 2021-04-16
- This CHANGELOG file on 2021-04-13
- A blank sidebar with the intention of creating a site specific note manager


### Changed
- Refactored browser-extension into src-ext


### Removed
- Removed email-validator to use pydantics EmailStr
- Database classes. These will be reimplemented once I determine common uses
[Unreleased]: https://github.com/jerlendds/studium

